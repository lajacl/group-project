/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T20:20:04-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedlogin.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T22:00:40-05:00
 */
 import 'feed/feed.styles'
 import templateUrl from 'feed/feedLogin/feedlogin.template'

 const controller =
   class TwtrFeedLoginController {
     constructor ($log, feedService, $state) {
       'ngInject'
       this.service = feedService
       this.$state = $state
       this.register = false
       this.selectView = 'Register'
       $log.debug('twtr-feedLogin...')
     }

     clickedToRegister () {
       return this.register
     }

     clickToLogin () {
       this.register = false
     }

     clickToRegister () {
       this.register = true
     }
   }

 export const twtrFeedLogin = {
   controller,
   templateUrl,
   controllerAs: 'feedLogin',
   bindings: {
     selectView: '@'
   }
 }
