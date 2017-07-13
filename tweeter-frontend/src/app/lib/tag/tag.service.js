/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:58-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T18:15:47-05:00
 */
 export class TagService {
   constructor ($http, $log) {
     'ngInject'
     this.$http = $http
     this.$log = $log
   }

   currentLabel (label) {
     return label
   }

   validateTweet (label) {
     return this.$http({
       method: 'GET',
       url: 'http://localhost:8888/tag/validate/tag/exists/',
       params: {label: label}
     }).then((response) => {
       if (response.data !== undefined) {
         return true
       }
     }, (response) => {
       return false
     })
   }

   displayTweets (label) {
     if (label === undefined) {

     } else {
       return this.$http({
         method: 'GET',
         url: `http://localhost:8888/tag/tags/${label}`
       }).then((response) => {
         if (response.data !== undefined) {
           return response.data
         }
       }, (response) => {
         return response.data
       })
     }
   }
}
