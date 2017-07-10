/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:47:42-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T17:24:59-05:00
 */
 export class RegisterService {
   constructor ($q, localStorageService, $http, $log, $state) {
     'ngInject'
     this.$q = $q
     this.localStorageService = localStorageService
     this.$http = $http
     this.$log = $log
     this.$state = $state
   }

   register (username, password, email, firstName, lastName, phoneNumber) {
     // checks if the username is one of the known usernames, and the password is 'password'

     let userObject = { credentials: { username: username, password: password } }

     this.$http({
       method: 'POST',
       url: 'http://localhost:8888/user/users/validate/user',
       data: userObject,
       headers: {
         'Access-Control-Allow-Origin': '*',
         'content-type': 'application/json'
       }
     }).then((response) => {
       if (response.data !== false) {
         this.localStorageService.set('currentUser', username)
         this.$state.go('game')
       }
       this.$log.log(`Success going to and from server ${response.data}`)
     }, (response) => {
       this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
     })
   }

 }
