/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T10:56:55-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: app.run.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T11:20:46-05:00
 */

 import { Visualizer } from '@uirouter/visualizer'
 
 export const run =
   ($uiRouter) => {
     'ngInject'
     $uiRouter.plugin(Visualizer)
   }
