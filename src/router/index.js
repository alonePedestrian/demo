import Vue from 'vue'
import Router from 'vue-router'
import Spin from '@/components/spin'
import Spin1 from '@/components/spin1'
import DragDemo from '@/components/drag_demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Spin',
      component: Spin
    },
    {
      path: '/Spin1',
      name: 'Spin1',
      component: Spin1
    },
    {
      path: '/dragDemo',
      name: 'DragDemo',
      component: DragDemo
    },
  ]
})
