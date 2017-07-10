/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:44:18-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T16:57:53-05:00
 */
 import 'register/register.styles'
 import templateUrl from 'register/register.template'

 const controller =
   class twtrRegisterController {
     constructor ($log, registerService, $state) {
       'ngInject'
       this.service = registerService
       this.$state = $state
       $log.debug('twtr-register ...')
     }

     join () {

     }
   }

 export const twtrRegister = {
   controller,
   templateUrl,
   controllerAs: 'register',
   bindings: {
     username: '<',
     password: '<'
   }
 }
