/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:51-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T17:45:54-05:00
 */
 import { TagService } from 'tag/tag.service'

 import { twtrTag } from 'tag/tag.component'
 import { config } from 'tag/tag.config'

 export default ng
   .module('twtr.tag', [])
   .service('tagService', TagService)
   .component('twtrTag', twtrTag)
   .config(config)
   .name
