import Vue from 'vue'
import Router from 'vue-router'
import Spin from '@/components/spin'
import index from '@/components/index'
import Spin1 from '@/components/spin1'
import DragDemo from '@/components/drag_demo'
import inputNum from '@/components/input-num'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Spin1',
      name: 'Spin1',
      component: Spin1
    },
    {
      path: '/Spin',
      name: 'Spin',
      component: Spin
    },
    {
      path: '/dragDemo',
      name: 'DragDemo',
      component: DragDemo
    },
    {
      path: '/inputNum',
      name: 'inputNum',
      component: inputNum
    },
  ]
})
