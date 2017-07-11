/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T06:43:46-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'tweet',
      url: '/tweets/{tweetId}',
      component: 'twtrTweet',
      resolve: {
        twt: function (tweetsService, $transition$) {
          return tweetsService.getTweet(parseInt($transition$.params().tweetId))
        }
      }
    })
  }
