/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T13:47:39-05:00
 */

import { twtrPost } from 'post/post.component'
import { PostService } from 'post/post.service'
import { config } from 'post/post.config'

export default ng
  .module('twtr.post', [])
  .service('postService', PostService)
  .component('twtrPost', twtrPost)
  .config(config)
  .name
