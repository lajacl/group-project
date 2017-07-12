/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T07:24:39-05:00
 */

import 'tweet/tweet.styles'
import templateUrl from 'tweet/tweet.template'

const controller =
class TwtrTweetController {
  constructor ($log, tweetService) {
    'ngInject'
    this.svc = tweetService
    this.twt = undefined
    this.username = undefined
    this.password = undefined
    $log.log('twtr-tweet is good')
  }

  // get username () {
  //   return this.username
  // }
  //
  // get password () {
  //   return this.password
  // }

  get user () {
    return { username: this.username, password: this.password }
  }

  get tweet () {
    return this.twt
  }

  currentUserIsLoggedIn () {
    return (this.user.username != undefined) && (this.user.password != undefined)
  }

  isOwnedByCurrentUser () {
    return (this.user.username === this.author.username)
  }

  visibleToAny () {
    return true
  }

  visibleToOwner () {
    return this.isOwnedByCurrentUser()
  }

  visibleToAnyUser () {
    return this.currentUserIsLoggedIn()
  }

  visibleToOtherUsers () {
    return this.currentUserIsLoggedIn() && !this.isOwnedByCurrentUser()
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

  like () {
    return this.svc.like(this.user, this.id)
  }
}

export const twtrTweet = {
  controller,
  templateUrl,
  bindings: { twt: '<', username: '<', password: '<' },
  controllerAs: 'tweet'
}
