/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T06:48:31-05:00
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
