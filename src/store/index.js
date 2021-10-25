import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    token: null,
    userData: null
  },
  mutations: {
    RECORD_ERROR (state, err) {
      state.error = err
    },
    RESET_ERROR (state) {
      state.error = null
    }
  },
  actions: {
    SIGN_IN ({ commit }, data) {
      api.user.getJwtSingIn(data)
        .then((res) => {
          commit('RESET_ERROR')
          console.log(res.status)
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    }
  },
  getters: {
    ERROR: state => state.error
  }
})
