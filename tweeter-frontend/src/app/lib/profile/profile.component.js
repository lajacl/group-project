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
    constructor ($log) {
      'ngInject'
      this.user = undefined
      $log.debug('twtr-profile')
    }

    get name () {
      return this.user.name
    }

    get id () {
      return this.user.id
    }

    get username () {
      return this.user.username
    }
  }

export const twtrProfile = {
  controller,
  templateUrl,
  bindings: { user: '<' },
  controllerAs: 'profile'
}
