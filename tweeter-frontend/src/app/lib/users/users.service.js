/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:55:46-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:13:08-05:00
 */

export class UsersService {
  constructor (usersData) {
    'ngInject'
    Object.assign(this, usersData)
  }
}
