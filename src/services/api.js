import axios from 'axios'
import guestApi from '@/services/guestApi'
import userApi from '@/services/userApi'

const BASE_URL = 'http://localhost:8080'

// Экземпляр для гостя
const base = axios.create({
  baseURL: BASE_URL
})

// Экземпляр для авторизованного пользователя
const user = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`
  }
})

export default {
  guest: guestApi(base),
  authUser: userApi(user)
}
