/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T08:12:59-05:00
 */

export class TweetsService {
  constructor ($http) {
    'ngInject'
    // Object.assign(this, tweetsData)
    this.http = $http
  }

  getAllTweets () {
    return this.http.get('http://localhost:8888/tweet/tweets')
  }

  getTweet (id) {
    return this.http.get(`http://localhost:8888/tweet/tweets/{id}`)
  }
}
