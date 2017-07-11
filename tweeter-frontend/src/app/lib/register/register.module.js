/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:47:31-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: register.module.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T16:53:24-05:00
 */

 import { RegisterService } from 'register/register.service'
 import { twtrRegister } from 'register/register.component'
 import { config } from 'register/register.config'

 export default ng
   .module('twtr.register', [])
   .service('registerService', RegisterService)
   .component('twtrRegister', twtrRegister)
   .config(config)
   .name
