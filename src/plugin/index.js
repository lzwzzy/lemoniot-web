import {http} from '../service/index'

import computed from './plugin-computed'
import directives from './plugin-directives'
import filters from './plugin-filters'
import methods from './plugin-methods'

export default {
    install(Vue) {
        Vue.prototype.$http = http;
        Vue.mixin({
            /*
            * 对于全局高度依赖的vuex数据，把他作为每个组组件公用计算属性是一个方便的做法
            * */
            computed: computed,
            /*
            * 全局方法
            * */
            methods: methods,
            /*
            * 全局指令
            * */
            directives: directives,
            /*
            * 过滤器
            * */
            filters: filters
        })
    }
}
