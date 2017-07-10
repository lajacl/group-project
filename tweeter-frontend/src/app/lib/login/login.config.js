/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T11:39:18-05:00
 */

 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'login',
       url: '/login',
       component: 'twtrLogin'
     })
   }
