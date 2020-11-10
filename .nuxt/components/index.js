export { default as Contacts } from '../../components/contacts/index.vue'
export { default as Constants } from '../../components/home/constants.js'
export { default as Home } from '../../components/home/index.vue'
export { default as Footer } from '../../components/navigation/footer/index.vue'
export { default as Header } from '../../components/navigation/header/index.vue'
export { default as Menu } from '../../components/navigation/menu/index.vue'

export const LazyContacts = import('../../components/contacts/index.vue' /* webpackChunkName: "components/contacts/index" */).then(c => c.default || c)
export const LazyConstants = import('../../components/home/constants.js' /* webpackChunkName: "components/home/constants" */).then(c => c.default || c)
export const LazyHome = import('../../components/home/index.vue' /* webpackChunkName: "components/home/index" */).then(c => c.default || c)
export const LazyFooter = import('../../components/navigation/footer/index.vue' /* webpackChunkName: "components/navigation/footer/index" */).then(c => c.default || c)
export const LazyHeader = import('../../components/navigation/header/index.vue' /* webpackChunkName: "components/navigation/header/index" */).then(c => c.default || c)
export const LazyMenu = import('../../components/navigation/menu/index.vue' /* webpackChunkName: "components/navigation/menu/index" */).then(c => c.default || c)
