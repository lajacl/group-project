/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T01:16:02-05:00
 */

import 'tweet/tweet.styles'
import templateUrl from 'tweet/tweet.template'

const controller =
class TwtrTweetController {
  constructor ($log, $state, tweetService) {
    'ngInject'
    this.svc = tweetService
    this.state = $state
    this.twt = undefined
    this.username = undefined
    this.password = undefined
    this.allReplies = undefined
    this.replyContent = undefined
    this.log = $log
    $log.log('twtr-tweet ...')
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

  visibleToVisitors () {
    return !this.currentUserIsLoggedIn()
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

  get replies () {
    return this.allReplies
  }

  reply () {
    this.svc.reply(this.user, this.replyContent, this.id)
    // this.state.go('tweet({ tweetId: t.id })')
    console.log('hello')
    // this.state.reload()
    this.state.go('tweet', null, {reload: true})
  }

  like () {
    this.svc.like(this.user, this.id)
    this.state.go('tweet', null, {reload: true})
  }

  repost () {
    this.svc.repost(this.user, this.id)
    this.state.go('tweet', null, {reload: true})
  }

  delete () {
    this.svc.delete(this.id)
    this.state.go('feed', { username: '' })
  }
}

export const twtrTweet = {
  controller,
  templateUrl,
  bindings: { twt: '<', username: '<', allReplies: '=', password: '<' },
  controllerAs: 'tweet'
}
