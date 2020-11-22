import { menu } from './menu';
import { header } from './header';
import axios from 'axios';

const sleep = m => new Promise(r => setTimeout(r, m))

const getProduct = (products, productsImages, productSlug) => 
{
  const innerProduct = products.find(p => p.pSlug === productSlug)
  if (!innerProduct) return null
  return {
    ...innerProduct,
    images: productsImages.find(img => img.id === innerProduct.id).urls,
    category: categories.find(cat => cat.id === innerProduct.category_id)
  }
}

const getBreadcrumbs = (pageType, route, data) => 
{
  const crumbs = []
  crumbs.push({
    title: 'Главная',
    url: '/'
  })
  switch (pageType) {
    case 'category':
      crumbs.push({
        title: data.name,
        url: `/${data.href}`
      })
      break
    case 'product':
      crumbs.push({
        title: data.category.name,
        url: `/${data.category.cSlug}`
      })
      crumbs.push({
        title: data.pName,
        url: `/${data.pSlug}`
      })

      break

    default:
      break
  }
  return crumbs
}

const add_category_products = ( products, category ) =>
{
  const category_inner = { ...category, products: [] }
  debugger;
  products.map( p => {
    debugger;
    if ( p.href === category.href )
    {
      category_inner.products.push({
        name: p.name,
      })
    }
  })
  return category_inner;
}

export const state = () => ({
  // menu_items: [],
  header_items: [],
  current_category: {},
  bredcrumbs: [],
  
  // current_product: {},
})
export const mutations = {
  // SET_MENU_ITEMS (state, menu) {
  //   state.menu_items = menu
  // },
  SET_HEADERS (state, headers) {
    state.header_items = headers
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.current_category = category
  },
  // SET_BREADCRUMBS (state, crumbs) {
  //   state.bredcrumbs = crumbs
  // },
  RESET_BREADCRUMBS (state) {
    state.bredcrumbs = []
  },
}
export const actions = {
  async nuxtServerInit ({commit}) {
    // await commit('SET_MENU_ITEMS', menu)
    await commit('SET_HEADERS', header)
  },  
  
  // async setBreadcrumbs ({ commit }, data) {
  //   await commit('SET_BREADCRUMBS', data)
  // },
  async getCurrentCategory ({ commit, dispatch }, { route }) {
    let category = [];
    let products = [];
     await this.$axios.$get('http://localhost:3001/api/category')
      .then(res => category = res.find((cat) => cat.href === route.params.SpecificCategory));
      await this.$axios.$get('http://localhost:3001/api/products')
      .then(res => products = res);
      commit('SET_CURRENT_CATEGORY', add_category_products(products, category))
    // const crubms = getBreadcrumbs('category', route, category)
    // await dispatch('setBreadcrumbs', crubms)
    // await commit('SET_CURRENT_CATEGORY', add_category_products(products, productsImages, category))
  },
  // async getCurrentProduct ({ commit, dispatch }, { route }) {
  //   await sleep(300)
  //   const productSlug = route.params.SpecificProduct
  //   const [products, productsImages] = await Promise.all(
  //     [
  //       this.$axios.$get('/mock/products.json'),
  //       this.$axios.$get('/mock/products-images.json')
  //     ]
  //   )
  //   const product = getProduct(products, productsImages, productSlug)
  //   await commit('SET_CURRENT_PRODUCT', product)
  // }
}