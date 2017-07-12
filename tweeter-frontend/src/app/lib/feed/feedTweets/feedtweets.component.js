/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T20:28:40-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedtweets.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T21:02:52-05:00
 */
 import 'feed/feed.styles'
 import templateUrl from 'feed/feedTweets/feedtweets.template'

 const controller =
   class TwtrFeedTweetsController {
     constructor ($log, feedService, $state) {
       'ngInject'
       this.service = feedService
       this.$state = $state
       $log.debug('twtr-feedTweets ...')
     }

   }

 export const twtrFeedTweets = {
   controller,
   templateUrl,
   controllerAs: 'feedTweets'
 }
