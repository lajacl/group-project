/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T06:41:32-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'tweet',
      url: '/tweets/{tweetId}',
      component: 'twtrTweet',
      resolve: {
        twt: function ($transition$, tweetsService) {
          return tweetsService
                  .getTweet(Number($transition$.params().tweetId))
        },
        username: function ($transition$, localStorageService) {
          return localStorageService.get('currentUser').username
        },
        password: function ($transition$, localStorageService) {
          return localStorageService.get('password')
        }
      }
    })
  }
