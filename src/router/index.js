import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import Authorize from '@/components/authorize'
import Oauth from '@/components/oauth'
import store from '../store'

Vue.use(VueRouter)

// noinspection JSAnnotator
const routes = [
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
  },
  {
    path: '/authorize',
    name: 'authorize',
    component: Authorize
  },
  {
    path: '/oauth',
    name: 'oauth',
    component: Oauth
  }
]


export const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.user.authUser) {
    if (to.path === '/authorize' || to.path === '/oauth') {
      console.log(to.query)
      next()
    }else {
      next({
        path: '/authorize',
        query: {visit: to.path}
      })
    }
  } else {
    next()
  }
})
