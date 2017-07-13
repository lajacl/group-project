/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-13T01:39:17-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.likes.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T02:05:50-05:00
 */

import templateUrl from 'tweet/tweet.likes.template'

const controller =
  class TweetLikesController {
    constructor ($log) {
      'ngInject'
      this.allLikes = undefined
      $log.log('twtr-tweet-likes ...')
    }

    get likes () {
      return this.allLikes
    }
  }

export const tweetLikes = {
  controller,
  templateUrl,
  bindings: { allLikes: '<'},
  controllerAs: 'tweetLikes'
}
