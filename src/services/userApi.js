export default function (user) {
  return {
    getDataOfUser (token) {
      user.defaults.headers.common.Authorization = `Bearer ${token}`
      return user.get('/about/')
    }
  }
}
