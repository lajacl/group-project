/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:06-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T11:27:54-05:00
 */

import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class TwtrAppController {
  constructor ($log, loginService, $state) {
    'ngInject'
    this.loginService = loginService
    this.$state = $state
    $log.debug('twtr-app ...')
  }

  loggingOut () {
    this.loginService.logout().then(this.$state.reload('feed'))
  }
}

export const twtrApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
