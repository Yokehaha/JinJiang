import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grxx from '@/components/xxwh/grxx'
import Mmxg from '@/components/xxwh/mmxg'
import ZhuCe from '@/components/ZhuCe'
import Xc from '@/components/yh/xc'
import WangJi from '@/components/WangJi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      component:()=>import('@/components/Login')
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/xxwh/grxx',
      component: Grxx
    },
    {
      path: '/xxwh/mmxg',
      component: Mmxg
    },
    {
      path: '/ZhuCe',
      component: ZhuCe
    },
    {
      path: '/WangJi',
      component: WangJi
    },
    {
      path: '/yh/xc',
      component: Xc
    }
  ]
})
