import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c81894d2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7a156cd8 = () => interopDefault(import('../pages/_SpecificCategory.vue' /* webpackChunkName: "pages/_SpecificCategory" */))

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
    component: _c81894d2,
    name: "index"
  }, {
    path: "/:SpecificCategory",
    component: _7a156cd8,
    name: "SpecificCategory"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
