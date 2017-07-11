/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.component.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T13:36:05-05:00
 */

import 'post/post.styles'
import templateUrl from 'post/post.template'

const controller =
  class TwtrPostController {
    constructor ($log, postService) {
      'ngInject'
      this.username = undefined
      this.password = undefined
      this.postService = postService
      $log.log('twtr-post ...')
    }

    post () {
      return this.postService.post(this.username, this.password, this.content)
    }
  }

export const twtrPost = {
  controller,
  templateUrl,
  bindings: { username: '<' },
  controllerAs: 'post'
}
