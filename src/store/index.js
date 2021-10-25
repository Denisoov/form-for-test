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
    },
    CLEAR_MESSAGE (state) {
      state.message = null
    }
  },
  actions: {
    SIGN_IN ({ commit }, data) {
      api.user.getJwtSingIn(data)
        .then(res => {
          const token = res.data.token
          commit('AUTH_TOKEN', token)
          localStorage.setItem('jwtToken', JSON.stringify(token))
          router.push('/')
          commit('RESET_ERROR')
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    CURRENT_SESSION ({ commit }, token) {
      commit('AUTH_TOKEN', token)
    },
    LOG_IN ({ commit }, user) {
      api.user.createAccount(user)
        .then(res => {
          commit('MESSAGE_AFTER_LOG_IN', res.data.message)
          router.push('/auth')
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    LOG_OUT ({ commit }) {
      commit('REMOVE_TOKEN')
    },
    CLEAR_ERROR ({ commit }) {
      commit('RESET_ERROR')
    },
    RESET_MESSAGE ({ commit }) {
      commit('CLEAR_MESSAGE')
    }
  },
  getters: {
    ERROR: state => state.error,
    TOKEN: state => state.token,
    MESSAGE: state => state.message
  }
})
