/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T14:16:43-05:00
 */

export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'post',
      url: '/tweets/post',
      component: 'twtrPost',
      resolve: {
        username: function ($transition$, localStorageService) {
          return localStorageService.get('currentUser').username
        },
        password: function ($transition$, localStorageService) {
          return localStorageService.get('password')
        }
      }
    })
  }
