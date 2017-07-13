/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T21:09:29-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.module.0.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:10:32-05:00
 */

import { UsersService } from 'users/users.service'
import { twtrUsers } from 'users/users.component'
import { config } from 'users/users.config'
import usersData from 'users/users.data'

export default ng
  .module('twtr.users', [])
  .service('usersService', UsersService)
  .component('twtrUsers', twtrUsers)
  .constant('usersData', usersData)
  .config(config)
  .name
