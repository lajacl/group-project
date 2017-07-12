/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T19:42:05-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedheader.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T20:18:32-05:00
 */

 import 'feed/feed.styles'
 import templateUrl from 'feed/feedHeader/feedheader.template'

 const controller =
   class TwtrFeedHeaderController {
     constructor ($log, feedService, $state) {
       'ngInject'
       this.service = feedService
       this.$state = $state
       $log.debug('twtr-feedHeader ...')
     }

     get usersName () {
       return this.service.username()
     }
   }

 export const twtrFeedHeader = {
   controller,
   templateUrl,
   controllerAs: 'feedHeader',
   bindings: {
     username: '@'
   }
 }
