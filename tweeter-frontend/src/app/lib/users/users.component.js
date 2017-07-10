/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:55:46-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:11:48-05:00
 */

import 'users/users.styles'
import templateUrl from 'users/users.template'

const controller =
 class TwtrUsersController {
   constructor ($log) {
     'ngInject'
     this.allUsers = undefined
     $log.log('twtr-users ...')
   }

   get users () {
     return this.allUsers
   }

 }

export const twtrUsers = {
  controller,
  templateUrl,
  bindings: { allUsers: '<' },
  controllerAs: 'users'
}
