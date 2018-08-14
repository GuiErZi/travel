/*
* @Author: fjz
* @Date:   2018-08-14 14:48:48
* @Last Modified by:   fjz
* @Last Modified time: 2018-08-14 15:28:51
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations
})
