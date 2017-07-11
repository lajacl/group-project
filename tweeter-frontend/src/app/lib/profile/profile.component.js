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
  controllerAs: 'profile',
  bindings: { user: '=' }
}
