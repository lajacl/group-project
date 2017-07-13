/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:51-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T19:21:44-05:00
 */
 import { AllTagService } from 'alltags/alltag.service'

 import { twtrAllTag } from 'alltags/alltag.component'
 import { config } from 'alltags/alltag.config'

 export default ng
   .module('twtr.alltag', [])
   .service('allTagService', AllTagService)
   .component('twtrAllTag', twtrAllTag)
   .config(config)
   .name
