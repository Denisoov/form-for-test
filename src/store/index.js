import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'
import router from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    message: null,
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
    },
    MESSAGE_AFTER_LOG_IN (state, message) {
      state.message = message
    }
  },
  actions: {
    SIGN_IN ({ commit }, data) {
      api.user.getJwtSingIn(data)
        .then(res => {
          commit('AUTH_TOKEN', res.data.token)
          router.push('/')
          commit('RESET_ERROR')
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    LOG_IN ({ commit }, user) {
      api.user.createAccount(user)
        .then(res => {
          commit('MESSAGE_AFTER_LOG_IN', res.data)
          router.push('/auth')
        })
    },
    LOG_OUT ({ commit }) {
      commit('REMOVE_TOKEN')
    }
  },
  getters: {
    ERROR: state => state.error,
    TOKEN: state => state.token,
    MESSAGE: state => state.token
  }
})
