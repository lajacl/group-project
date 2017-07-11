/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T13:11:41-05:00
 */

export class PostService {
  constructor ($log, $http) {
    'ngInject'
    this.log = $log
    this.http = $http
  }

  post (username, password, content) {
    return this.http.post('http://localhost:8888/tweet/tweets', {
      params: { tweet: {
        content,
        credentials: {
          username,
          password
        }
      }}
    })
  }
}
