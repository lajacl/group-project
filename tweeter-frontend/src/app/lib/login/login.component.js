/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T21:05:27-05:00
 */

import 'login/login.styles'
import templateUrl from 'login/login.template'

const controller =
  class TwtrLoginController {
    constructor ($log, loginService) {
      'ngInject'
      this.service = loginService
      $log.debug('twtr-login ...')
    }

    successfulLogin () {
      return this.service.isAuthenticated()
    }

    login () {
      this.service.authenticate(this.username, this.password)
    }

    logout () {
      this.service.logout()
    }
  }

export const twtrLogin = {
  controller,
  templateUrl,
  controllerAs: 'login',
  bindings: {
    username: '<',
    password: '<'
  }
}
