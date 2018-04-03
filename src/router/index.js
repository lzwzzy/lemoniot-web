import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //默认跳转首页
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
