export const loading = {
  state: {
    loading: false
  },
  mutations: {
    TOGGLE_LOADING (state) {
      state.loading = !state.loading
    }
  },
  getters: {
    LOADING: state => state.loading
  }
}
