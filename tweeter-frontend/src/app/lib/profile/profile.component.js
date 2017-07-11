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
      this.user = undefined
      this.service = profileService
      $log.debug('twtr-profile')
      this.$log = $log
      this.localStorageService = localStorageService
    }

    getUserByUName () {
      this.$log.log('Username: ' + this.username)
      return this.service.getUserByUName(this.username)
    }

    get username () {
      return this.user.username
    }

    get fname () {
      return this.user.fname
    }

    get lname () {
      return this.user.lname
    }

    get email () {
      return this.user.email
    }

    get phone () {
      return this.user.phone
    }

    get joined () {
      return this.user.joined
    }

    get following () {
      return ['shagginwaggon', 'daphyduckface', 'readyfreddie', 'msdinkley']
    }

    get followers () {
      return ['shagginwaggon']
    }

  }

export const twtrProfile = {
  controller,
  templateUrl,
  bindings: { username: '<' },
  controllerAs: 'profile'
}
