export default function (base) {
  return {
    getJwtSingIn (data) {
      return base.post('/login/', data)
    }
  }
}
