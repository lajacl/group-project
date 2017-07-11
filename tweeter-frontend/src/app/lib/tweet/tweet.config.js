/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T10:28:01-05:00
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
          // console.log(`twt-resolve: ${$transition$.params().tweetId}`)
          return tweetsService
                  .getTweet(Number($transition$.params().tweetId))
                  // .then(
                  //   function successCB (response) {
                  //     console.log(`response length: ${response.data.length}`)
                  //     console.log(`success: ${response.data[0].author.username}`)
                  //     return response.data[0]
                  //   },
                  //   function errorCB (response) {
                  //     console.log(`failure: ${response.status}`)
                  //     return undefined
                  //   }
                  // )
        }
      }
    })
  }
