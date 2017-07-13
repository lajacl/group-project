/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T00:14:07-05:00
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
                  .then((res) => res.data,
                        (res) => console.error(`getTweet(${id}) failed`))
        },
        password: function ($transition$, localStorageService) {
          return localStorageService.get('password')
        },
        username: function ($transition$, localStorageService) {
          let cu = localStorageService.get('currentUser')
          return (cu != null) ? cu.username : undefined
        },
        allReplies: function ($transition$, tweetService) {
          return tweetService
                  .replies(Number($transition$.params().tweetId))
                  .then(res => res.data,
                        res => console.error(`replies(${tid}) failed`))
        }
      }
    })
  }
