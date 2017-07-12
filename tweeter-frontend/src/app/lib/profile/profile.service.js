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

    return this.$http({
      method: method,
      url: apiUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      return response.data
    }, (response) => {
      this.$log.log(`User not found ${response.status}`)
    })
  }

  getUserFollowing (username) {
    let method = 'GET'
    let apiUrl = 'http://localhost:8888/user/users/@' + username + '/following'

    return this.$http({
      method: method,
      url: apiUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      this.$log.log(`Response Data: ${response.data}`)
      return response.data
    }, (response) => {
      this.$log.log(`Users being followed not found ${response.status}`)
    })
  }

    getUserFollowers (username) {
    let method = 'GET'
    let apiUrl = 'http://localhost:8888/user/users/@' + username + '/followers'

    return this.$http({
      method: method,
      url: apiUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      return response.data
    }, (response) => {
      this.$log.log(`Users following not found ${response.status}`)
    })
  }

}
