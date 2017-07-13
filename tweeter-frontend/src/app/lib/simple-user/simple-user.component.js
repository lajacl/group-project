/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T20:08:03-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: simple-tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:17:41-05:00
 */

import 'simple-user/simple-user.styles'
import templateUrl from 'simple-user/simple-user.template'

const controller =
  class SimpleUserController {
    constructor ($log) {
      'ngInject'
      this.usr = undefined
      $log.log('simple-user ...')
    }

    get user () {
      return this.usr
    }

    get username () {
      return this.usr.username
    }

    get joined () {
      return this.usr.joined
    }

    get profile () {
      return this.usr.profile
    }
  }

  export const simpleUser = {
    controller,
    templateUrl,
    bindings: { usr: '<' },
    controllerAs: 'simpleUser'
  }
