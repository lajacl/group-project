/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:47:42-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T18:38:42-05:00
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

     let userObject = { credentials: { username: username, password: password }, profile: { email: email } }
     let optionalInfo = { firstName: firstName, lastName: lastName, phone: phoneNumber }

     this.$http({
       method: 'POST',
       url: 'http://localhost:8888/user/users',
       params: optionalInfo,
       data: userObject
     }).then((response) => {
       if (response.data.username !== undefined) {
         this.localStorageService.set('currentUser', username)
       }
       this.$log.log(`Success going to and from server ${response.data.username}`)
     }, (response) => {
       this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
     })
   }

 }
