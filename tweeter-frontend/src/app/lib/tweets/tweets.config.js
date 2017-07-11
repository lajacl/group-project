/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T06:21:18-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'tweets',
      url: '/tweets',
      component: 'twtrTweets',
      resolve: {
        allTweets: function (tweetsService) {
          return tweetsService.getAllTweets()
        }
      }
    })
  }
