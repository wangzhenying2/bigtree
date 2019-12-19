import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const main = () => import('@c/common/main.vue')
const index = () => import('@c/index.vue')
const word = () => import('@c/word.vue')
const prod = () => import('@c/prod.vue')

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: main,
        children: [{
            path: '/',
            component: index
        }, {
            path: '/word',
            component: word
        }, {
            path: '/prod',
            component: prod
        }]
    }]
})