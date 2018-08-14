/*
* @Author: fjz
* @Date:   2018-08-14 15:19:08
* @Last Modified by:   fjz
* @Last Modified time: 2018-08-14 15:29:23
*/
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
