/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T21:00:48-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'feed',
       url: '/feed',
       component: 'twtrFeed',
       resolve: {
         tweets: (feedService) => {
           return feedService.displayTweets()
         }
       }
     })
   }
