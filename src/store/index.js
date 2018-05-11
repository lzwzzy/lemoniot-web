import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user/module'
import systemModule from './sys/module'

Vue.use(Vuex)


export default new Vuex.Store({
  strict: false,
  modules: {
    user: userModule,
    system: systemModule
  }
})
