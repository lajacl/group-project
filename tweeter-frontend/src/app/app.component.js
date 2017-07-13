/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:06-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T20:03:33-05:00
 */

import 'app/app.styles'
import templateUrl from 'app/app.template'

const controller = class TwtrAppController {
  constructor ($log, loginService, $state, localStorageService) {
    'ngInject'
    this.loginService = loginService
    this.$state = $state
    $log.debug('twtr-app ...')
    this.localStorageService = localStorageService
  }

  loggingOut () {
    this.loginService.logout().then(() => this.$state.go('feed', { username: '' }, { reload: true }))
  }

  // search by tags / mentions
  searchType = '#'
  currSearch = 'Tag'
  search () {
    let input = this.searchInput
    if (this.searchType === '#') {
      this.$state.go('tag', {label: input}, {reload: true})
    } else if (this.searchType === '@') {
      this.$state.go('profile', {username: input}, {reload: true})
    }
  }

  // Checks if a user is currently logged in
  isLoggedOn () {
    return this.localStorageService.get('currentUser') !== null
  }

  getProfileUrl () {
    let currentUsername = this.localStorageService.get('currentUser').username
    return '/profile/' + currentUsername
  }

}

export const twtrApp = {
  controller,
  templateUrl,
  controllerAs: 'app'
}
