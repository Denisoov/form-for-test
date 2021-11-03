import api from '@/services/api'
import router from '@/router'

export const user = {
  state: {
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
    REMOVE_USER_DATA (state) {
      Object.keys(state.userData).forEach((el) => {
        state.userData[el] = null
      })
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
          localStorage.setItem('jwtToken', JSON.stringify(token))
          commit('AUTH_TOKEN', token)
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
    async GET_DATA_USER ({ commit, state }) {
      try {
        await commit('TOGGLE_LOADING')
        const data = await api.authUser.getDataOfUser(state.token)
        await commit('RECORD_USER_DATA', data.data)
        await commit('TOGGLE_LOADING')
      } catch (err) {
        commit('MESSAGE_AFTER_LOG_IN', err)
      }
    },
    // Деавторизуем пользователя
    async LOG_OUT ({ commit }) {
      await localStorage.removeItem('jwtToken')
      await router.push('/auth')
      await commit('REMOVE_TOKEN')
      await commit('REMOVE_USER_DATA')
    }
  },
  getters: {
    TOKEN: state => state.token,
    USER_DATA: state => state.userData
  }
}
