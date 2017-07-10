/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:53:21-05:00
 */

import { twtrProfile } from 'profile/profile.component'
import { config } from 'profile/profile.config'

export default ng
  .module('twtr.profile', [])
  .component('twtrProfile', twtrProfile)
  .config(config)
  .name
