/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T00:11:06-05:00
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
    // return this.http.get('http://localhost:8888/tweet/tweets/', {
    //   params: { id: id }
    // })
    // console.log(`getTweet(${id})`)
    // return this.http({
    //   method: 'GET',
    //   url: 'http://localhost:8888/tweet/tweets/',
    //   params: { id: id }
    // }).then(
    //   (response) => response.data,
    //   (response) => console.error(`getTweet failed`)
    // )
    return this.http.get(`http://localhost:8888/tweet/tweets/${id}`)
            // .then((res) => res.data,
            //       (res) => console.error(`getTweet(${id}) failed`))
    // return this.http({
    //   method: 'GET',
    //   url: `http://localhost:8888/tweet/tweets/`,
    //   params: {'tweetId': String(id)}
    // })
    // .then((res) => res.data,
    //       (res) => console.error(`getTweet(${id}) failed`))
  }
}
