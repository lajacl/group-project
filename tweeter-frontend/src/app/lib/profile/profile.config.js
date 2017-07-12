/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:11:27-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: profile.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:32:24-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'profile',
      url: '/profile/{username}',
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
        }
      }
    })
  }
