/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T11:24:45-05:00
 */

import 'tweet/tweet.styles'
import templateUrl from 'tweet/tweet.template'

const controller =
class TwtrTweetController {
  constructor ($log) {
    'ngInject'
    this.twt = undefined
    $log.log('twtr-tweet is good')
  }

  get author () {
    return this.twt.author
  }

  get id () {
    return this.twt.id
  }

  get content () {
    return this.twt.content
  }

  get posted () {
    return this.twt.posted
  }
}

export const twtrTweet = {
  controller,
  templateUrl,
  bindings: { twt: '<' },
  controllerAs: 'tweet'
}
