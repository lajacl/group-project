/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-13T02:21:00-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.mentions.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T02:30:36-05:00
 */

import templateUrl from 'tweet/tweet.mentions.template'

const controller =
  class TweetMentionsController {
    constructor ($log) {
      'ngInject'
      this.allMentions = undefined
      $log.log('twtr-tweet-mentions ...')
    }

    get mentions () {
      return this.allMentions
    }
  }

export const tweetMentions = {
  controller,
  templateUrl,
  bindings: { allMentions: '<' },
  controllerAs: 'tweetMentions'
}
