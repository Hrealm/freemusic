import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Singer from '../components/singer/singer'
import Radio from '../components/radio/radio'
import Mv from '../components/mv/mv'
import Leaderboard from '../components/leaderboard/leaderboard'

//安装element-ui 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入插件axios 挂载属性
import Axios from 'axios'
Axios.defaults.baseURL = 'http://locahost:8899/'
Vue.prototype.axios = Axios

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active', //动态class
    routes: [
        {
            path: '/',
            redirect:{ name: 'index' }
        },
        {
            path: '/ ',
            name: 'index',
            component: Index
        },
        {
            path: '/singer',
            name: 'singer',
            component: Singer
        },
        {
            path: '/radio',
            name: 'radio',
            component: Radio
        },
        {
            path: '/mv',
            name: 'mv',
            component: Mv
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: Leaderboard
        }
    ]
})
