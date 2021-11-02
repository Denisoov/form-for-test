export const notification = {
  state: {
    error: null,
    message: null
  },
  mutations: {
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
    MESSAGE: state => state.message
  }
}
