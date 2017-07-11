/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T11:09:41-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feed.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T19:15:03-05:00
 */
 import { FeedService } from 'feed/feed.service'
 import { twtrFeed } from 'feed/feed.component'
 import { config } from 'feed/feed.config'

 export default ng
   .module('twtr.feed', [])
   .service('feedService', FeedService)
   .component('twtrFeed', twtrFeed)
   .config(config)
   .name
