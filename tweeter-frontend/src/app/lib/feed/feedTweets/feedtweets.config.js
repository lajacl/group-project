/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T20:28:56-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedtweets.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T21:09:13-05:00
 */
 export const configFeedTweets =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'feedTweets',
       component: 'twtrFeedTweets'
     })
   }
