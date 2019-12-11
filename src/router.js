import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = () => import('@c/index.vue')

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: index
    }]
})