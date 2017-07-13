/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T20:08:03-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: simple-tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T20:15:39-05:00
 */

import 'simple-tweet/simple-tweet.styles'
import templateUrl from 'simple-tweet/simple-tweet.template'

const controller =
  class SimpleTweetController {
    constructor ($log) {
      'ngInject'
      this.twt = undefined
      $log.log('simple-tweet ...')
    }

    get tweet () {
      return this.twt
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

  export const simpleTweet = {
    controller,
    templateUrl,
    bindings: { twt: '<' },
    controllerAs: 'simpleTweet'
  }
