/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T20:22:08-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedlogin.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T20:22:49-05:00
 */
 export const configFeedLogin =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       parent: 'feed',
       name: 'feedLogin',
       component: 'twtrFeedLogin'
     })
   }
