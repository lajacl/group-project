/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:37:43-05:00
 */

import 'tweets/tweets.styles'
import templateUrl from 'tweets/tweets.template'

const controller =
class TwtrTweetsController {
  constructor ($log) {
    'ngInject'
    this.allTweets = undefined
    $log.log('twtr-tweets ...')
  }

  get tweets () {
    return this.allTweets
  }

}

export const twtrTweets = {
  controller,
  templateUrl,
  bindings: { allTweets: '<' },
  controllerAs: 'tweets'
}
