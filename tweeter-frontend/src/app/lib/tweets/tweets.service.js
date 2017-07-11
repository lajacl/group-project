/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T06:18:54-05:00
 */

export class TweetsService {
  constructor (tweetsData) {
    'ngInject'
    Object.assign(this, tweetsData)
  }
}
