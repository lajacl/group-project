/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-13T09:23:38-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.tags.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T09:23:38-05:00
 */

import templateUrl from 'tweet/tweet.tags.template'

const controller =
  class TweetTagsController {
    constructor ($log) {
      'ngInject'
      this.allTags = undefined
      $log.log('twtr-tweet-tags ...')
    }

    get tags () {
      return this.allTags
    }
  }

export const tweetTags = {
  controller,
  templateUrl,
  bindings: { allTags: '<'},
  controllerAs: 'tweetTags'
}
