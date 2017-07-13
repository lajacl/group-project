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
    constructor ($log, profileService, localStorageService, $state) {
      'ngInject'
      this.service = profileService
      this.$state = $state
      $log.debug('twtr-profile')
      this.localStorageService = localStorageService
    }

    get follow_btn_text () {
      return this.service.updateFollowBtn(this.followers)
    }

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

    set fName (fName) {
      this.user.profile.firstName = fName
    }

    set lName (lName) {
      this.user.profile.lastName = lName
    }

    set email (address) {
      this.user.profile.email = address
    }

    set phone (number) {
      this.user.profile.phone = number
    }

    get isCurrentUser () {
      return this.service.isCurrentUser(this.username)
    }

    get isActive () {
      return this.service.isActiveUser(this.username)
    }

    // updateFollowBtn () {
    //   return this.service.updateFollowBtn(this.followers)
    // }

    currUserFollowing () {
      return this.service.currUserFollowing(this.followers)
    }

    followUser () {
      if (this.service.isLoggedOn()) {
        this.service.followUser(this.username).then(this.$state.reload())
      } else {
        this.service.errorMessage = 'Log In To Follow This User: ' + this.username
        this.$log.log('Not Logged In To Follow This User: ' + this.username)
      }
    }

    unfollowUser () {
      if (this.service.isLoggedOn()) {
        this.service.unfollowUser(this.username).then(this.$state.reload('profile'))
      } else {
        this.$log.log('Not Logged In To Unfollow This User: ' + this.username)
      }
    }

    // userExists () {
    //   return this.service.userExists()
    // }

    deleteUser () {
      this.service.deleteUser().then(this.$state.go('login'))
    }

    get errorMessage () {
      return this.service.errorMessage
    }

    formOpen = false

    // shows or hides profile update form
    updateForm () {
      if (this.formOpen === false) {
        this.formOpen = true
      } else {
        this.formOpen = false
      }
    }

    updateUser () {
      this.service.updateUser(this.fName, this.lName, this.phone, this.email)
      this.updateForm()
    }

    isLoggedOn () {
      return this.service.isLoggedOn()
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
