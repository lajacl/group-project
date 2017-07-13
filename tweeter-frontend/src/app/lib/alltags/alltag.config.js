/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:43-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: allTag.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T19:22:32-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'alltag',
       url: '/alltag',
       component: 'twtrAllTag',
       resolve: {
         tags: (allTagService) => {
           return allTagService.displayTags()
         }
       }
     })
   }
