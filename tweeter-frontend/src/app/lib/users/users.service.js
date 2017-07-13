/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:55:46-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:13:08-05:00
 */

export class UsersService {
  constructor ($http) {
    'ngInject'
    // Object.assign(this, usersData)
    this.http = $http
  }

  getAllUsers () {
    return this.http.get('http://localhost:8888/user/users')
  }
}
