/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T21:58:21-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.module.0.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:58:38-05:00
 */

 import { twtrTweet } from 'tweet/tweet.component'
 import { TweetService } from 'tweet/tweet.service'
 import { config } from 'tweet/tweet.config'

 export default ng
   .module('twtr.tweet', [])
   .service('tweetService', TweetService)
   .component('twtrTweet', twtrTweet)
   .config(config)
   .name
