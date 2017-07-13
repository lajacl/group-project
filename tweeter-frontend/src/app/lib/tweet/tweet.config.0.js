/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T21:57:20-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.0.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:57:35-05:00
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
           let cu = localStorageService.get('currentUser')
           return (cu != null) ? cu.username : undefined
         },
         password: function ($transition$, localStorageService) {
           return localStorageService.get('password')
         }
       }
     })
   }
