import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/Store.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('@/views/Brand.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/Service.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }
  ]
})