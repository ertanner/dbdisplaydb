import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    ip: 'http://10.254.55.31:1339'
  },
  getters: {
    getIP: state => {
      return state.ip
    }
  }
})
