/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:34-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: alltag.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T19:21:54-05:00
 */
 import 'alltags/alltag.styles'
 import templateUrl from 'alltags/alltag.template'

 const controller =
   class TwtrAllTagController {
     constructor ($log, allTagService, $state) {
       'ngInject'
       this.service = allTagService
       this.$state = $state
       $log.debug('twtr-alltag ...')
     }

   }

 export const twtrAllTag = {
   controller,
   templateUrl,
   controllerAs: 'alltag',
   bindings: {
     tags: '='
   }
 }
