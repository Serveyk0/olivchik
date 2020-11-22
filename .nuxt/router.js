import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01724591 = () => interopDefault(import('..\\pages\\about_us.vue' /* webpackChunkName: "pages_about_us" */))
const _341283d4 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages_contacts" */))
const _0f8186f5 = () => interopDefault(import('..\\pages\\delivery.vue' /* webpackChunkName: "pages_delivery" */))
const _b22c28b4 = () => interopDefault(import('..\\pages\\api\\new_category.vue' /* webpackChunkName: "pages_api_new_category" */))
const _984cba12 = () => interopDefault(import('..\\pages\\api\\new_product.vue' /* webpackChunkName: "pages_api_new_product" */))
const _7df196a0 = () => interopDefault(import('..\\pages\\category\\_SpecificCategory.vue' /* webpackChunkName: "pages_category__SpecificCategory" */))
const _3f8e56ba = () => interopDefault(import('..\\pages\\products\\_SpecificProduct.vue' /* webpackChunkName: "pages_products__SpecificProduct" */))
const _f84adebe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _01724591,
    name: "about_us"
  }, {
    path: "/contacts",
    component: _341283d4,
    name: "contacts"
  }, {
    path: "/delivery",
    component: _0f8186f5,
    name: "delivery"
  }, {
    path: "/api/new_category",
    component: _b22c28b4,
    name: "api-new_category"
  }, {
    path: "/api/new_product",
    component: _984cba12,
    name: "api-new_product"
  }, {
    path: "/category/:SpecificCategory?",
    component: _7df196a0,
    name: "category-SpecificCategory"
  }, {
    path: "/products/:SpecificProduct?",
    component: _3f8e56ba,
    name: "products-SpecificProduct"
  }, {
    path: "/",
    component: _f84adebe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
