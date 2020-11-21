import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _578674db = () => interopDefault(import('../pages/about_us.vue' /* webpackChunkName: "pages/about_us" */))
const _ebb299c4 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _6595b63f = () => interopDefault(import('../pages/delivery.vue' /* webpackChunkName: "pages/delivery" */))
const _770d7a46 = () => interopDefault(import('../pages/api/new_category.vue' /* webpackChunkName: "pages/api/new_category" */))
const _c2728384 = () => interopDefault(import('../pages/api/new_menu.vue' /* webpackChunkName: "pages/api/new_menu" */))
const _5f213a89 = () => interopDefault(import('../pages/category/_SpecificCategory.vue' /* webpackChunkName: "pages/category/_SpecificCategory" */))
const _6ba199e4 = () => interopDefault(import('../pages/products/_SpecificProduct.vue' /* webpackChunkName: "pages/products/_SpecificProduct" */))
const _c81894d2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about_us",
    component: _578674db,
    name: "about_us"
  }, {
    path: "/contacts",
    component: _ebb299c4,
    name: "contacts"
  }, {
    path: "/delivery",
    component: _6595b63f,
    name: "delivery"
  }, {
    path: "/api/new_category",
    component: _770d7a46,
    name: "api-new_category"
  }, {
    path: "/api/new_menu",
    component: _c2728384,
    name: "api-new_menu"
  }, {
    path: "/category/:SpecificCategory?",
    component: _5f213a89,
    name: "category-SpecificCategory"
  }, {
    path: "/products/:SpecificProduct?",
    component: _6ba199e4,
    name: "products-SpecificProduct"
  }, {
    path: "/",
    component: _c81894d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
