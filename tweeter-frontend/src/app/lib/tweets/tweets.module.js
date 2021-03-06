/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T20:40:12-05:00
 */

import { TweetsService } from 'tweets/tweets.service'
import { twtrTweets } from 'tweets/tweets.component'
import { config } from 'tweets/tweets.config'
//import tweetsData from 'tweets/tweets.data'

import simpleTweet from 'simple-tweet/simple-tweet.module'

export default ng
  .module('twtr.tweets', [simpleTweet])
  .service('tweetsService', TweetsService)
  .component('twtrTweets', twtrTweets)
  //.constant('tweetsData', tweetsData)
  .config(config)
  .name
