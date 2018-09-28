import Vue from 'vue'
import Router from 'vue-router'
import Spin from '@/components/spin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Spin',
      component: Spin
    }
  ]
})
