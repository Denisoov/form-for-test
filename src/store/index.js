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
    AUTH_TOKEN (state, token) {
      state.token = token
    },
    REMOVE_TOKEN (state) {
      state.token = null
    },
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
          commit('AUTH_TOKEN', res.data.token)
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    LOG_OUT ({ commit }) {
      commit('REMOVE_TOKEN')
    }
  },
  getters: {
    ERROR: state => state.error,
    TOKEN: state => state.token
  }
})
