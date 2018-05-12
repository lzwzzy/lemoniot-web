import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import RoomList from '@/components/room/roomList'
import AddRoom from '@/components/room/addRoomList'
import EditRoom from '@/components/room/editRoom'
import NewDeviceList from '@/components/newDeviceList'
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
    path: '/room/roomList',
    name: 'roomList',
    component: RoomList
  },
  {
    path: '/room/addRoom',
    name: 'addRoom',
    component: AddRoom
  },
  {
    path: '/room/:id/editRoom',
    name: 'editRoom',
    component: EditRoom
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
  },
  {
    path: '/newDeviceList',
    name: 'newDeviceList',
    component: NewDeviceList
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
    } else {
      next({
        path: '/authorize',
        query: {visit: to.path}
      })
    }
  } else {
    next()
  }
})
