/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T20:32:30-05:00
 */
 import { FeedService } from 'feed/feed.service'

 import { twtrFeed } from 'feed/feed.component'
 import { twtrFeedHeader } from 'feed/feedHeader/feedheader.component'
 import { twtrFeedLogin } from 'feed/feedLogin/feedlogin.component'
 import { twtrFeedTweets } from 'feed/feedTweets/feedtweets.component'

 import { configFeedHeader } from 'feed/feedHeader/feedheader.config'
 import { configFeedLogin } from 'feed/feedLogin/feedlogin.config'
 import { configFeedTweets } from 'feed/feedTweets/feedtweets.config'
 import { config } from 'feed/feed.config'

 export default ng
   .module('twtr.feed', [])
   .service('feedService', FeedService)
   .component('twtrFeed', twtrFeed)
   .component('twtrFeedHeader', twtrFeedHeader)
   .component('twtrFeedLogin', twtrFeedLogin)
   .component('twtrFeedTweets', twtrFeedTweets)
   .config(configFeedHeader)
   .config(configFeedLogin)
   .config(configFeedTweets)
   .config(config)
   .name
