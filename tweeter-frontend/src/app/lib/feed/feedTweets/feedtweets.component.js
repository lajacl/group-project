/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T20:28:40-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedtweets.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-13T14:32:01-05:00
 */
 import 'feed/feedTweets/feedtweets.styles'
 import templateUrl from 'feed/feedTweets/feedtweets.template'

 const controller =
   class TwtrFeedTweetsController {
     constructor ($log, feedService, $state, postService, localStorageService, loginService) {
       'ngInject'
       this.service = feedService
       this.postService = postService
       this.localStorageService = localStorageService
       this.loginService = loginService
       this.$state = $state
       $log.debug('twtr-feedTweets ...')
     }

     post () {
       let username = this.localStorageService.get('currentUser').username
       let password = this.localStorageService.get('password')
       this.postService.post(username, password, this.content)
                              .then(() => this.$state.reload('feed'))
     }
   }

 export const twtrFeedTweets = {
   controller,
   templateUrl,
   controllerAs: 'feedTweets',
   bindings: {
     content: '<'
   }
 }
