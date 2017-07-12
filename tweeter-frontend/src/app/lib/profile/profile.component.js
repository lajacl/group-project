/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:43:37-05:00
 */

import 'profile/profile.styles'
import templateUrl from 'profile/profile.template'

const controller =
  class TwtrProfileController {
    constructor ($log, profileService, localStorageService) {
      'ngInject'
      // this.user = undefined
      this.service = profileService
      $log.debug('twtr-profile')
      this.$log = $log
      this.localStorageService = localStorageService
    }

    follow_btn_text = 'Follow'

    get username () {
      return this.user.username
    }

    get fName () {
      return this.user.profile.firstName
    }

    get lName () {
      return this.user.profile.lastName
    }

    get email () {
      return this.user.profile.email
    }

    get phone () {
      return this.user.profile.phone
    }

    get isCurrentUser () {
      return this.service.isCurrentUser(this.username)
    }

    get isActive () {
      return this.service.isActiveUser(this.username)
    }

    updateFollowBtn () {
      this.follow_btn_text = this.service.updateFollowBtn(this.username)
    }

    followUser () {
      if (this.service.isLoggedOn()) {
        this.service.followUser(this.username)
      } else {
        this.service.errorMessage = 'You Must Log In To Follow This User: ' + this.username
        this.$log.log('Not Logged In To Follow This User: ' + this.username)
      }
    }

    unfollowUser () {
      if (this.service.isLoggedOn()) {
        this.service.unfollowUser(this.username)
      } else {
        this.service.errorMessage = 'Please Log In' + this.username
        this.$log.log('Not Logged In To Unfollow This User: ' + this.username)
      }
    }

    userExists () {
      return this.service.userExists()
    }

    deleteUser () {
      this.service.deleteUser()
    }

      get errorMessage () {
        return this.service.errorMessage()
      }

  }

export const twtrProfile = {
  controller,
  templateUrl,
  controllerAs: 'profile',
  bindings: {
    user: '=',
    following: '=',
    followers: '='
  }
}
