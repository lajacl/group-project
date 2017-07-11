/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T19:27:35-05:00
 */
 import 'feed/feed.styles'
 import templateUrl from 'feed/feed.template'

 const controller =
   class TwtrFeedController {
     constructor ($log, feedService, $state) {
       'ngInject'
       this.service = feedService
       this.$state = $state
       $log.debug('twtr-feed ...')
     }

     showDisplayOfTweet () {
       return this.service.displayTweets()
     }

   }

 export const twtrFeed = {
   controller,
   templateUrl,
   controllerAs: 'feed'
 }
