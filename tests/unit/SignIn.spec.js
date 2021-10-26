import Vuetify from 'vuetify'
import FormSignIn from '@/components/FormSignIn'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store/index'

describe('FormSignIn.vue', () => {
  const localVue = createLocalVue(Vuex)
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(FormSignIn, {
      localVue,
      store,
      vuetify,
      ...options
    })
  }

  it('user authorization', () => {
    const wrapper = mountFunction({
      propsData: {
        propsData: {
          signInData: {
            username: 'test',
            password: '123'
          }
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
