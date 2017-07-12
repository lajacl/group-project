/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T10:19:17-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'feed',
       url: '/feed/{username}?',
       component: 'twtrFeed',
       resolve: {
         tweets: (feedService, $transition$) => {
           return feedService.displayTweets($transition$.params().username)
         }
       }
     })
   }
