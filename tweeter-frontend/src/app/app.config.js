/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:55:15-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-11T16:25:37-05:00
 */

export const config =
  ($logProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    'ngInject'
    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/feed')

    localStorageServiceProvider
      .setPrefix('tweeterApp')
      .setStorageType('sessionStorage')
  }
