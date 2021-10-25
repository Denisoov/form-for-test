import axios from 'axios'
import userApi from '@/services/userApi'

const BASE_URL = 'http://localhost:8080'

const base = axios.create({
  baseURL: BASE_URL
})

export default {
  user: userApi(base)
}
