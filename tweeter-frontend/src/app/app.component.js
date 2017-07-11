/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:06-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T11:01:21-05:00
 */

import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class TwtrAppController {
  constructor ($log) {
    'ngInject'
    $log.debug('twtr-app ...')
  }
}

export const twtrApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
