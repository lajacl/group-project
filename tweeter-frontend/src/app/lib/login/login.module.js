/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:22:37-05:00
 */

import { LoginService } from 'login/login.service'
import { twtrLogin } from 'login/login.component'
import { config } from 'login/login.config'

export default ng
  .module('twtr.login', [])
  .service('loginService', LoginService)
  .component('twtrLogin', twtrLogin)
  .config(config)
  .name
