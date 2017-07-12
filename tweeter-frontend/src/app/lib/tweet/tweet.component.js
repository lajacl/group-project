/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T11:59:56-05:00
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
    this._showReplyEditor = false
    this._showLikes = false
    this._showMentions = false
    this._showReplies = false
    this._showReposts = false
    this._likes = []
    this._mentions = []
    this._replies = []
    this._reposts = []
    this.log = $log
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

  get showReplyEditor () {
    return this._showReplyEditor
  }

  toggleReplyEditor () {
    this._showReplyEditor = !this._showReplyEditor
  }

  toggleLikes () {
    this._showLikes = !this._showLikes
    // console.log(this._showLikes)
    if(this._showLikes) this.likes()
    // console.log(this._likes)
  }

  toggleMentions () {
    this._showMentions = !this._showMentions
    if(this._showMentions) this.mentions()
  }

  toggleReplies () {
    this._showReplies = !this._showReplies
    if(this._showReplies) this.replies()
  }

  toggleReposts () {
    this._showReposts = !this._showReposts
    if(this._showReposts) this.reposts()
  }

  // API methods
  delete () {
    this.svc.delete(this.id)
    this.state.go('feed', { username: '' })
  }

  like () {
    return this.svc.like(this.user, this.id)
  }

  reply () {
    this.svc.reply(this.user, this.replyContent, this.id)
    this.state.go('tweet',
                  { twt: this.tweet,
                    username: this.user.username,
                    password: this.user.password },
                  { reload: true })
  }

  repost () {
    this.svc.repost(this.user, this.id)
    this.state.go('tweet',
                  { twt: this.tweet,
                    username: this.user.username,
                    password: this.user.password },
                  { reload: true })
  }

  likes () {
    this.svc.likes(this.id).then(
      res => this._likes = res.data,
      res => console.error('TwtrTweetController.likes'))
  }

  mentions () {
    this.svc.mentions(this.id).then(
      res => this._mentions = res.data,
      res => console.error('TwtrTweetController.mentions'))
  }

  replies () {
    this.svc.replies(this.id).then(
      res => this._replies = res.data,
      res => console.error('TwtrTweetController.replies'))
  }

  reposts () {
    this.svc.reposts(this.id).then(
      res => this._reposts = res.data,
      res => console.error('TwtrTweetController.reposts'))
  }
}

export const twtrTweet = {
  controller,
  templateUrl,
  bindings: { twt: '<', username: '<', password: '<' },
  controllerAs: 'tweet'
}
