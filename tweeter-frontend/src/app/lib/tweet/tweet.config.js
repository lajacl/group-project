/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T09:47:51-05:00
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
    $stateProvider.state({
      name: 'tweet.likes',
      url: '/',
      component: 'tweetLikes',
      resolve: {
        allLikes: function (twt, tweetService) {
          console.log(twt)
          return tweetService
                  .likes(twt.id)
                  .then(res => { console.log(res.data); return res.data },
                        res => console.error(`likes(${twt.id}) failed`))
        }
      }
    })
    $stateProvider.state({
      name: 'tweet.mentions',
      url: '/',
      component: 'tweetMentions',
      resolve: {
        allMentions: function (twt, tweetService) {
          console.log(twt)
          return tweetService
                  .mentions(twt.id)
                  .then(res => { console.log(res.data); return res.data },
                        res => console.error(`mentions(${twt.id}) failed`))
        }
      }
    })
    $stateProvider.state({
      name: 'tweet.reposts',
      url: '/',
      component: 'tweetReposts',
      resolve: {
        allReposts: function (twt, tweetService) {
          // console.log(twt)
          return tweetService
                  .reposts(twt.id)
                  .then(res => { console.log(res.data); return res.data },
                        res => console.error(`reposts(${twt.id}) failed`))
        }
      }
    })
    $stateProvider.state({
      name: 'tweet.tags',
      url: '/',
      component: 'tweetTags',
      resolve: {
        allTags: function (twt, tweetService) {
          // console.log(twt)
          return tweetService
                  .tags(twt.id)
                  .then(res => { console.log(res.data); return res.data },
                        res => console.error(`tags(${twt.id}) failed`))
        }
      }
    })
  }
