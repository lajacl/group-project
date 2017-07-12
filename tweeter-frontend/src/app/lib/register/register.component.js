/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:44:18-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T08:47:55-05:00
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
       this.service.register(this.username, this.password, this.email, this.firstName, this.lastName, this.phoneNumber).then(this.$state.reload('feed'))
     }

     registerError () {
       return this.service.errorMessage()
     }
   }

 export const twtrRegister = {
   controller,
   templateUrl,
   controllerAs: 'register',
   bindings: {
     username: '<',
     password: '<',
     email: '<',
     firstName: '<',
     lastName: '<',
     phoneNumber: '<'
   }
 }
