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

  errorMessage = ''

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
  updateFollowBtn (un) {
    // this.$log.log('Logged On: ' + this.isLoggedOn())
    // if (this.isLoggedOn()) {
    //   let currentUsername = this.localStorageService.get('currentUser').username
    //   this.$log.log('Current User: ' + currentUsername)
    //   let usersFollowed = this.getUserFollowing(currentUsername)
    //   this.$log.log('usersFollowed: ' + usersFollowed[0])
    //   this.$log.log('usersFollowed Username: ' + usersFollowed[0].username)
    //   for (let followed in usersFollowed) {
    //     this.$log.log('User: ' + followed.username)
    //     if (followed.username === un) {
    //       return 'Unfollow'
    //     }
    //   }
    // } else {
    return 'Follow'
    // }
  }

// error display
 errorMessage () {
   return this.errorMessage
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
      this.$log.log(`User not found ${response.status}`)
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
      this.$log.log(`Followed users not found, ${response.status}`)
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
        this.$log.log(`Users following not found ${response.status}`)
      })
    }

    // Follow a user
    followUser (username) {
      let currentUsername = this.localStorageService.get('currentUser').username
      let curentUserPass = this.localStorageService.get('password')
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users/@' + username + '/follow'
      let requestBody = { credentials: { username: currentUsername, password: curentUserPass } }

      this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
        this.$log.log(`User followed: ` + username + `, Status: ${response.status}`)
      }, (response) => {
        this.$log.log(`Unable to follow user ` + username + `, Status: ${response.status}`)
      })
    }

    // Unfollow a user
    unfollowUser (username) {
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users/@' + username + '/unfollow'
      let currentUsername = this.localStorageService.get('currentUser').username
      let curentUserPass = this.localStorageService.get('password')
      let requestBody = { credentials: { username: currentUsername, password: curentUserPass } }

      this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
        this.$log.log(`User unfollowed: ` + username + `, Status: ${response.status}`)
      }, (response) => {
        this.$log.log(`Unable to unfollow user: ` + username + `, Status: ${response.status}`)
      })
    }

    // Update / Patch a user
    updateUser (firstName, lastName, phone) {
      let currentUsername = this.localStorageService.get('currentUser').username
      let curentUserPass = this.localStorageService.get('password')
      let method = 'PATCH'
      let apiUrl = 'http://localhost:8888/user/users/@' + currentUsername
      let params = { firstName: firstName, lastName: lastName, phone: phone } + { username: currentUsername }
      let requestBody = { credentials: { username: currentUsername, password: curentUserPass } }

      this.$http({
        method: method,
        url: apiUrl,
        params: params,
        data: requestBody
      }).then((response) => {
        this.$log.log(`User profile updated: ` + currentUsername + `, Status: ${response.status}`)
      }, (response) => {
        this.$log.log(`Unable to update user profile: ` + currentUsername + `, Status: ${response.status}`)
      })
    }

    userExists () {
      let currentUsername = this.localStorageService.get('currentUser').username
      let method = 'GET'
      let apiUrl = 'http://localhost:8888/user/validate/username/exists/@' + currentUsername

      this.$http({
        method: method,
        url: apiUrl,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        }
      }).then((response) => {
        this.$log.log(`User deleted: ` + currentUsername + `, Status: ${response.status}`)
        return response.data
      }, (response) => {
        this.$log.log(`Unable to delete user: ` + currentUsername + `, Status: ${response.status}`)
      })
    }

    // Delete a user
    deleteUser () {
      let currentUsername = this.localStorageService.get('currentUser').username
      let curentUserPass = this.localStorageService.get('password')
      let method = 'DELETE'
      let apiUrl = 'http://localhost:8888/user/users/@' + currentUsername
      let requestBody = { credentials: { username: currentUsername, password: curentUserPass } }

      this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
        this.$log.log(`User deleted: ` + currentUsername + `, Status: ${response.status}`)
        this.localStorageService.clearAll()
      }, (response) => {
        this.$log.log(`Unable to delete user: ` + currentUsername + `, Status: ${response.status}`)
      })
    }

    // Reactivate a user
    activateUser () {
      let currentUsername = this.localStorageService.get('currentUser').username
      let curentUserPass = this.localStorageService.get('password')
      let currentEmail = this.localStorageService.get('currentUser').profile.email
      let method = 'POST'
      let apiUrl = 'http://localhost:8888/user/users'
      let requestBody = { credentials: { username: currentUsername, password: curentUserPass },
        profile: { email: currentEmail } }

      this.$http({
        method: method,
        url: apiUrl,
        data: requestBody
      }).then((response) => {
        this.$log.log(`User reactivated: ` + currentUsername + `, Status: ${response.status}`)
      }, (response) => {
        this.$log.log(`Unable to reactivate user: ` + currentUsername + `, Status: ${response.status}`)
      })
    }

}
