/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:55:46-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.config.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:21:49-05:00
 */

export const config =
 ($stateProvider) => {
   'ngInject'
   $stateProvider.state({
     name: 'users',
     url: '/users',
     component: 'twtrUsers',
     resolve: {
       allUsers: function (usersService) {
         return usersService.getAllUsers()
       }
     }
   })
 }
