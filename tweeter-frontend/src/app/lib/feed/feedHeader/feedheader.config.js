/**
 * @Author: Anthony Perry
 * @Date:   2017-07-11T19:54:01-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: feedheader.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T20:15:12-05:00
 */
 export const configFeedHeader =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       parent: 'feed',
       name: 'feedHeader',
       component: 'twtrFeedHeader'
     })
   }
