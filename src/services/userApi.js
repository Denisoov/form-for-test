export default function (user) {
  return {
    async getDataOfUser (token) {
      user.defaults.headers.common.Authorization = `Bearer ${token}`
      return await user.get('/about/')
    }
  }
}
