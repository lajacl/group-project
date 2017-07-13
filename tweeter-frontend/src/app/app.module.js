/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:31-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T19:21:31-05:00
 */

 import ngLocalStorage from 'angular-local-storage'
 import ngUiRouter from 'angular-ui-router'

 import twtrLogin from 'login/login.module'
 import twtrRegister from 'register/register.module'
 import twtrUsers from 'users/users.module'
 import twtrProfile from 'profile/profile.module'
 import twtrTweets from 'tweets/tweets.module'
 import twtrTweet from 'tweet/tweet.module'
 import twtrFeed from 'feed/feed.module'
 import twtrPost from 'post/post.module'
 import twtrTag from 'tag/tag.module'
 import twtrAllTag from 'alltags/alltag.module'

 import { twtrApp } from 'app/app.component'
 import { config } from 'app/app.config'
 import { run } from 'app/app.run'

 export default ng
  .module('twtr.app', [
    ngLocalStorage,
    ngUiRouter,
    twtrLogin,
    twtrRegister,
    twtrUsers,
    twtrProfile,
    twtrTweets,
    twtrTweet,
    twtrFeed,
    twtrPost,
    twtrTag,
    twtrAllTag
  ])
  .component('twtrApp', twtrApp)
  .config(config)
  .run(run)
  .name
