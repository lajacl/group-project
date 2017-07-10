/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:16:19-05:00
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
  }

export const twtrLogin = {
  controller,
  templateUrl,
  controllerAs: 'about'
}
