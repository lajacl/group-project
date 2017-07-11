/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T05:51:36-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweets.data.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T06:17:33-05:00
 */

const author = (username) => ({
  username
})

const tweet = (author, content, id, posted) => ({
  author,
  content,
  id,
  posted
})

const tweets = (...ts) => {
  let tmap = new Map()
  ts.forEach(t => tmap.set(t.id, t))
  return {
    getAllTweets: function () {
      return ts
    },
    getTweet: function (id) {
      return tmap.get(id)
    }
  }
}

export default tweets(
  tweet(author('scoober'), 'ruh roh raggy', 1, (new Date()).toString()),
  tweet(author('velma'), 'jinkies', 2, (new Date()).toString()),
  tweet(author('shaggy'), 'let\'s get out of here scoob', 3, (new Date()).toString()),
  tweet(author('fred'), 'let\'s go gang', 4, (new Date()).toString()),
  tweet(author('daphne'), 'i\ve got scooby snacks', 5, (new Date()).toString()),
  tweet(author('scoober'), 'ooh rooby racks', 6, (new Date()).toString()),
  tweet(author('shaggy'), 'got any shaggy snacks?', 7, (new Date()).toString())
)
