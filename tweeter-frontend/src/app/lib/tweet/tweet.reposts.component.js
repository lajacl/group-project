/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-13T09:23:07-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.reposts.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T09:23:07-05:00
 */

import templateUrl from 'tweet/tweet.reposts.template'

const controller =
  class TweetRepostsController {
    constructor ($log) {
      'ngInject'
      this.allReposts = undefined
      $log.log('twtr-tweet-reposts ...')
    }

    get reposts () {
      return this.allReposts
    }
  }

export const tweetReposts = {
  controller,
  templateUrl,
  bindings: { allReposts: '<'},
  controllerAs: 'tweetReposts'
}
