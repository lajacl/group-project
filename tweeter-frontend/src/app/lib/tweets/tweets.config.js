/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T08:08:52-05:00
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
          return tweetsService.getAllTweets().then(
            function successCB (response) {
              return response.data
            },
            function errorCB (response) {
              return undefined
            }
          )
        }
      }
    })
  }
