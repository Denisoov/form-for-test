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
    userData: {
      username: null,
      avatar: null,
      about: null
    }
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
    },
    RECORD_USER_DATA (state, data) {
      state.userData = data.data
    }
  },
  actions: {
    // Авторизируем пользователя
    SIGN_IN ({ commit }, data) {
      api.guest.getJwtSingIn(data)
        .then(res => {
          const token = res.data.token
          commit('AUTH_TOKEN', token)
          localStorage.setItem('jwtToken', JSON.stringify(token))
          router.push('/')
          commit('RESET_ERROR')
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    // Фиксируем токен локального хранилища
    CURRENT_SESSION ({ commit, dispatch }, token) {
      commit('AUTH_TOKEN', token)
      dispatch('GET_DATA_USER')
    },
    // Регистрируем пользователя
    LOG_IN ({ commit }, user) {
      api.guest.createAccount(user)
        .then(res => {
          commit('MESSAGE_AFTER_LOG_IN', res.data.message)
          router.push('/auth')
        })
        .catch(err => commit('RECORD_ERROR', err.response.data.error))
    },
    // Получаем информацию о пользователе
    GET_DATA_USER ({ commit }) {
      api.authUser.getDataOfUser()
        .then((res) => {
          commit('RECORD_USER_DATA', res.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // Деавторизуем пользователя
    LOG_OUT ({ commit }) {
      commit('REMOVE_TOKEN')
      localStorage.removeItem('jwtToken')
    },
    // Очищаем ошибки
    CLEAR_ERROR ({ commit }) {
      commit('RESET_ERROR')
    },
    // Сбрасываем уведомления
    RESET_MESSAGE ({ commit }) {
      commit('CLEAR_MESSAGE')
    }
  },
  getters: {
    ERROR: state => state.error,
    TOKEN: state => state.token,
    MESSAGE: state => state.message,
    USER_DATA: state => state.userData
  }
})
