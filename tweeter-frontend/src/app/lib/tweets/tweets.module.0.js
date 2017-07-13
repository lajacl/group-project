/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T20:37:47-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.module.0.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T20:38:19-05:00
 */

import { TweetsService } from 'tweets/tweets.service'
import { twtrTweets } from 'tweets/tweets.component'
import { config } from 'tweets/tweets.config'
//import tweetsData from 'tweets/tweets.data'

export default ng
  .module('twtr.tweets', [])
  .service('tweetsService', TweetsService)
  .component('twtrTweets', twtrTweets)
  //.constant('tweetsData', tweetsData)
  .config(config)
  .name
