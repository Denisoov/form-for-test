export default function (base) {
  return {
    getJwtSingIn (data) {
      return base.post('/login/', data)
    },
    createAccount (data) {
      return base.post('/register/', data)
    }
  }
}
