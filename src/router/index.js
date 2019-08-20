import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Singer from '../components/singer/singer'
import Radio from '../components/radio/radio'
import Mv from '../components/mv/mv'
import Leaderboard from '../components/leaderboard/leaderboard'

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
