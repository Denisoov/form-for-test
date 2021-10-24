import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/registration',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
