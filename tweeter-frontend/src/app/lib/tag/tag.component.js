/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:34-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T18:22:10-05:00
 */
 import 'tag/tag.styles'
 import templateUrl from 'tag/tag.template'

 const controller =
   class TwtrTagController {
     constructor ($log, tagService, $state) {
       'ngInject'
       this.service = tagService
       this.$state = $state
       $log.debug('twtr-tag ...')
     }
     
   }

 export const twtrTag = {
   controller,
   templateUrl,
   controllerAs: 'tag',
   bindings: {
     tweets: '=',
     label: '@'
   }
 }
