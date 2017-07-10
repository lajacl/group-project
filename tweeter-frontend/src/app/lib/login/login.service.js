/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T16:22:05-05:00
 */

export class LoginService {
  constructor ($q, localStorageService, $http, $log, $state) {
    'ngInject'
    this.$q = $q
    this.localStorageService = localStorageService
    this.$http = $http
    this.$log = $log
    this.$state = $state
  }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated () {
    return this.localStorageService.get('currentUser') !== null
  }

  /**
   * Authentication function that returns a promise that is either resolved or rejected.
   */
  authenticate (username, password) {
    // checks if the username is one of the known usernames, and the password is 'password'

    let userObject = { username: username, password: password }

    this.$http({
      method: 'POST',
      url: 'http://localhost:8888/clickergame/user/validate',
      data: userObject,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      if (response.data !== false) {
        this.localStorageService.set('currentUser', username)
        this.$state.go('game')
      }
      this.$log.log(`Success going to and from server ${response.data}`)
    }, (response) => {
      this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
    })
  }

  /** Logs the current user out */
  logout () {
    this.localStorageService.clearAll()
  }
}
