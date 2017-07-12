/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T07:39:21-05:00
 */

export class TweetService {
  constructor ($log, $http) {
    'ngInject'
    this.log = $log
    this.http = $http
  }

  like (user, tid) {
    return this.http.post(`http://localhost:8888/tweet/tweets/${tid}/like`, {
      credentials: user
    }).then(res => this.log.debug(res.status),
            res => this.log.error(res.status))
  }
}
