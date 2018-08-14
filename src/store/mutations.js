/*
* @Author: fjz
* @Date:   2018-08-14 15:19:17
* @Last Modified by:   fjz
* @Last Modified time: 2018-08-14 15:30:38
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
