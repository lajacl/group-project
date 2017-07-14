/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-13T16:29:08-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'profile',
      url: '/profile/{username}',
      data: { requiresAuth: true },
      component: 'twtrProfile',
      resolve: {
        user: function (profileService, $transition$) {
          return profileService.getUser($transition$.params().username)
        },
        following: function (profileService, $transition$) {
          return profileService.getUserFollowing($transition$.params().username)
        },
        followers: function (profileService, $transition$) {
          return profileService.getUserFollowers($transition$.params().username)
        },
        exists: (loginService, $transition$) => {
          return loginService.userDoesExists($transition$.params().username)
        }
      }
    })
  }
