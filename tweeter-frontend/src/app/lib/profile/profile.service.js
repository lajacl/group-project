/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:53:06-05:00
 */

export class ProfileService {
  constructor ($q, localStorageService, $http, $log, $state) {
    'ngInject'
    this.$q = $q
    this.localStorageService = localStorageService
    this.$http = $http
    this.$log = $log
    this.$state = $state
  }

  getUser (username) {
    let method = 'GET'
    let apiUrl = 'http://localhost:8888/user/users/@' + username
    // let params = {username: username}
    // let requestBody

    return this.$http({
      method: method,
      url: apiUrl,
      // params: params,
      // data: requestBody
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      // if (response.data.username !== undefined) {
      //   this.localStorageService.set('currentUser', username)
      // }
      this.$log.log(`Server Success ${response.data.username}  `)
      return response.data
    }, (response) => {
      this.$log.log(`Error connecting to the server ${response.status}`)
    })
  }

  get Following () {
    let method = 'GET'
    let apiCall = 'http://localhost:8888/user/users/@{username}/followers'
  }

  get Followers () {
    let method = 'GET'
    let apiCall = 'http://localhost:8888/user/users/@{username}/following'
  }

}
