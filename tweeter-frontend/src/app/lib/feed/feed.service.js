/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T11:24:35-05:00
 */
 export class FeedService {
   constructor (localStorageService, $http, $log) {
     'ngInject'
     this.localStorageService = localStorageService
     this.$http = $http
     this.$log = $log
     this.user = ''
   }

   setUsername (anotherUser) {
     this.user = 'Feed'

     if (anotherUser !== '' || anotherUser.length !== 0) {
       this.user = anotherUser
     } else if (this.localStorageService.get('currentUser') !== null) {
       this.user = this.localStorageService.get('currentUser').username
     }
   }

   username () {
     return this.user
   }

   displayTweets (anotherUser) {
     let currentUser = {username: ''}

     if (anotherUser !== '' || anotherUser.length !== 0) {
       currentUser = { username: anotherUser }
     } else if (this.localStorageService.get('currentUser') !== null) {
       currentUser = this.localStorageService.get('currentUser')
     }

     this.$log.log(currentUser)
     if (currentUser.username !== '' && currentUser !== null && currentUser.username.lenth !== 0) {
       return this.$http({
         method: 'GET',
         url: 'http://localhost:8888/user/users/@' + currentUser.username + '/feed'
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
