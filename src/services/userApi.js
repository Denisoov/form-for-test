export default function (user) {
  return {
    getDataOfUser () {
      return user.get('/about/')
    }
  }
}
