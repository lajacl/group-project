/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:58-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T19:19:44-05:00
 */
 export class AllTagService {
   constructor ($http, $log) {
     'ngInject'
     this.$http = $http
     this.$log = $log
   }

   displayTags () {
     return this.$http({
       method: 'GET',
       url: `http://localhost:8888/tag/tags/`
     }).then((response) => {
       if (response.data !== undefined) {
         return response.data
       }
     }, (response) => {
       return response.data
     })
   }
}
