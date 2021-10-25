import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

const userApi = axios.create({
  baseURL: BASE_URL
})

export default function () {
  return {
    singIn (data) {
      return userApi.post('/login/', data)
    }
  }
}
