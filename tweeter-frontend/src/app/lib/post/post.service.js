/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T21:09:58-05:00
 */

export class PostService {
  constructor ($log, $http) {
    'ngInject'
    this.log = $log
    this.http = $http
  }

  post (username, password, content) {
    return this.http.post('http://localhost:8888/tweet/tweets', {
      content,
      credentials: {
        username,
        password
      }
    })
  }
}
