/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T08:39:49-05:00
 */
 export class FeedService {
   constructor ($q, localStorageService, $http, $log, $state) {
     'ngInject'
     this.$q = $q
     this.localStorageService = localStorageService
     this.$http = $http
     this.$log = $log
   }

   displayTweets () {
     if (this.localStorageService.get('currentUser') !== null) {
       let user = this.localStorageService.get('currentUser')
       this.$log.log(`Check before server ${user.username}`)
       this.$http({
         method: 'GET',
         url: 'http://localhost:8888/user/users/@' + user.username + '/feed'
       }).then((response) => {
         if (response.data !== undefined) {
           for (let variable of response.data) {
             this.$log.log(`User: ${variable.author.username}`)
           }
         }
         this.$log.log(`Success going to server ${response.data}`)
       }, (response) => {
         this.$log.log(`Success going to and from server, but returned an error ${response.status} ${response.header} ${response.data}`)
         for (let variable of response.data) {
           this.$log.log(`User: ${variable.author.username}`)
         }
       })
     } else {
       this.$http({
         method: 'GET',
         url: 'http://localhost:8888/tweet/tweets'
       }).then((response) => {
         if (response.data !== undefined) {
           for (let variable of response.data) {
             this.$log.log(`User: ${variable.author.username}`)
           }
         }
         this.$log.log(`Success going to and from server ${response.data}`)
       }, (response) => {
         this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
       })
     }
   }

 }
