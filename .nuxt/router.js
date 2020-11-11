import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _166c2e2b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _745ea1ba = () => interopDefault(import('..\\pages\\_CategoryItems.vue' /* webpackChunkName: "pages__CategoryItems" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _166c2e2b,
    name: "index"
  }, {
    path: "/:CategoryItems",
    component: _745ea1ba,
    name: "CategoryItems"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
