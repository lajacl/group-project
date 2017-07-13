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

  // Checks if a user is currently logged in
  isLoggedOn () {
    return this.localStorageService.get('currentUser') !== null
  }

 // Checks if the active page belongs to the current logged in user
  isCurrentUser (username) {
    if (this.isLoggedOn()) {
      return this.localStorageService.get('currentUser').username === username
    }
  }

  // Provides the text of the follow or unfollow btn based on current user
  updateFollowBtn (followers) {
    if (!this.isLoggedOn()) {
      return 'Follow'
    } else {
      let currentUsername = this.localStorageService.get('currentUser').username
      let usernames = followers.map(function (follower) {
        return follower.username
      })
      if (usernames.includes(currentUsername)) {
        return 'Unfollow'
      } else {
        return 'Follow'
      }
    }
  }

  // Get user by username
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
    })
  }

  // Get the users the active page's owner follows
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
      return response.data
    }, (response) => {
    })
  }

    // Get the active page's owner user's followers
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
      })
    }

    // Follow a user
    followUser (username) {
      let currentUsername = this.localStorageService.get('currentUser').username
      let currentUserPass = this.localStorageService.get('password')
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users/@' + username + '/follow'
      let requestBody = { credentials: { username: currentUsername, password: currentUserPass } }

      return this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
      }, (response) => {
      })
    }

    // Unfollow a user
    unfollowUser (username) {
      let currentUsername = this.localStorageService.get('currentUser').username
      let currentUserPass = this.localStorageService.get('password')
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users/@' + username + '/unfollow'
      let requestBody = { credentials: { username: currentUsername, password: currentUserPass } }

      return this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
      }, (response) => {
      })
    }

    // Update / Patch a user's profile info
    updateUser (firstName, lastName, phone, email) {
      let currentUsername = this.localStorageService.get('currentUser').username
      let currentUserPass = this.localStorageService.get('password')
      let method = 'PATCH'
      let apiUrl = 'http://localhost:8888/user/users/@' + currentUsername
      let params = { firstName: firstName, lastName: lastName, phone: phone, email: email }
      let requestBody = { credentials: { username: currentUsername, password: currentUserPass } }

      return this.$http({
        method: method,
        url: apiUrl,
        params: params,
        data: requestBody
      }).then((response) => {
      }, (response) => {

      })
    }

    // Delete a user
    deleteUser () {
      let currentUsername = this.localStorageService.get('currentUser').username
      let currentUserPass = this.localStorageService.get('password')
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users/delete/@' + currentUsername
      let requestBody = { credentials: { username: currentUsername, password: currentUserPass } }

      this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
        this.localStorageService.clearAll()
      }, (response) => {
      })
    }

}
