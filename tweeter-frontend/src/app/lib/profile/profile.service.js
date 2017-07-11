/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.service.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T13:53:06-05:00
 */

export class ProfileService {
  constructor ($q, localStorageService, $http, $log, $state) {
    'ngInject'
    this.$q = $q
    this.localStorageService = localStorageService
    this.$http = $http
    this.$log = $log
    this.$state = $state
  }

  getUser (username) {
    let method = 'GET';
    let apiCall = 'http://localhost:8888/user/users/' + username
  }

  get Following () {
    let method = 'GET';
    let apiCall = 'http://localhost:8888/user/users/@{username}/followers'
  }

  get Followers () {
    let method = 'GET';
    let apiCall = 'http://localhost:8888/user/users/@{username}/following'
  }

}

let users = [
  {username: 'scoobyDoo2',
      profile: {
        firstName: 'Scooby',
        lastName: 'Doo',
        email: 'scoodoo@snack.co',
        phone: '555-ruh-roh8'
      },
      joined: '12345'},
  {username: 'shagginwaggon',
      profile: {
        firstName:  'Shaggy',
        lastName: 'Rogers',
        email: 'shaggman@hippies.in',
        phone: '666-2zoinks',
      },
      joined: '1269558180'},
  {username: 'msdinkley',
      profile: {
        firstName:  'Velma',
        lastName: 'Dinkly',
        email: 'nerdygirl@focus.net',
        phone: '901.984.4310'
      },
        joined: '07102017'},
  {username: 'readyfreddie',
      profile: {
        firstName:  'Fred',
        lastName: 'Jones',
        email: 'ascotbot@lamers.go',
        phone: '4759874958'
      },
      joined: '1268660460'}, // 2010-03-15 10:41:00
{username: 'daphyduckface',
      profile: {
        firstName:  'Daphne',
        lastName: 'Blake',
        email: 'missprissy@ladylike.net',
        phone: '123-456-7890'
      },
      joined: '1290722580'}
]
// sessionStorage.setItem("user","User")
// sessionStorage.removeItem("user")
// $sessionStorage.empty()
// if (sessionStorage.clickcount) {
//  let user = sessionStorage.user
// } else {
//  (redirect to login)
// }
