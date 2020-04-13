import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f0fd6b4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2af8ae50 = () => interopDefault(import('../pages/vol.vue' /* webpackChunkName: "pages/vol" */))
const _16d0718f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _3f0fd6b4,
    name: "login"
  }, {
    path: "/vol",
    component: _2af8ae50,
    name: "vol"
  }, {
    path: "/",
    component: _16d0718f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
