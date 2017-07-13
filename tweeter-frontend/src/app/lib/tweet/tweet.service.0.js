/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-12T21:58:56-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.service.0.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:59:16-05:00
 */

 export class TweetService {
   constructor ($log, $http) {
     'ngInject'
     this.log = $log
     this.http = $http
   }

   delete (tid) {
     return this.http.delete(`http://localhost:8888/tweet/tweets/${tid}`)
       .then(res => this.log.debug(res.status),
             res => this.log.error(res.status))
   }

   like (user, tid) {
     return this.http.post(`http://localhost:8888/tweet/tweets/${tid}/like`, {
       credentials: user
     }).then(res => this.log.debug(res.status),
             res => this.log.error(res.status))
   }

   reply (user, content, tid) {
     return this.http.post(`http://localhost:8888/tweet/tweets/${tid}/reply`, {
       content,
       credentials: user
     }).then(res => this.log.debug(res.status),
             res => this.log.error(res.status))
   }

   repost (user, tid) {
     return this.http.post(`http://localhost:8888/tweet/tweets/${tid}/repost`, {
       credentials: user
     }).then(res => this.log.debug(res.status),
             res => this.log.error(res.status))
   }

   likes (tid) {
     // console.log(`tweetService.likes(${tid})`)
     return this.http.get(`http://localhost:8888/tweet/tweets/${tid}/likes`)
       // .then(res => res.data,
       //       res => this.log.error(res.status))
   }

   mentions (tid) {
     // console.log(`tweetService.likes(${tid})`)
     return this.http.get(`http://localhost:8888/tweet/tweets/${tid}/mentions`)
       // .then(res => res.data,
       //       res => this.log.error(res.status))
   }

   replies (tid) {
     // console.log(`tweetService.likes(${tid})`)
     return this.http.get(`http://localhost:8888/tweet/tweets/${tid}/replies`)
       // .then(res => res.data,
       //       res => this.log.error(res.status))
   }

   reposts (tid) {
     // console.log(`tweetService.likes(${tid})`)
     return this.http.get(`http://localhost:8888/tweet/tweets/${tid}/reposts`)
       // .then(res => res.data,
       //       res => this.log.error(res.status))
   }
 }
