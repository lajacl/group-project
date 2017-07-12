/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T17:28:12-05:00
 */
 export class FeedService {
   constructor (localStorageService, $http, $log) {
     'ngInject'
     this.localStorageService = localStorageService
     this.$http = $http
     this.$log = $log
   }

   username () {
     let user = this.localStorageService.get('currentUser')
     return user !== null ? user.username : 'Feed'
   }

   displayTweets () {
     let user = this.localStorageService.get('currentUser')
     if (this.localStorageService.get('currentUser') !== null) {
       this.$log.log(`Check before server ${user.username}`)
       return this.$http({
         method: 'GET',
         url: 'http://localhost:8888/user/users/@' + user.username + '/feed'
       }).then((response) => {
         if (response.data !== undefined) {
           return response.data
         }
         this.$log.log(`Success going to server ${response.data}`)
       }, (response) => {
         this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
         if (response.status === 302) {
           if (response.data !== undefined) {
             return response.data
           }
         }
       })
     } else {
       return this.$http({
         method: 'GET',
         url: 'http://localhost:8888/tweet/tweets'
       }).then((response) => {
         if (response.data !== undefined) {
           return response.data
         }
         this.$log.log(`Success going to and from server ${response.data}`)
       }, (response) => {
         this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
       })
     }
   }

 }
