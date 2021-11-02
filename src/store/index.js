import Vue from 'vue'
import Vuex from 'vuex'

import { loading } from '@/store/modules/loading'
import { notification } from '@/store/modules/notification'
import { user } from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    notification,
    user
  }
})
