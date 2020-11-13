import { menu } from './menu';

const sleep = m => new Promise(r => setTimeout(r, m))

const add_category_products = ( products, category ) =>
{
  const category_inner = { ...category, products: [] }
  products.map( p => {
    if ( p.category_id === category.id )
    {
      category_inner.products.push({
        id: p.id,
        name: p.name,
        price: p.price,
        desc: p.description
      })
    }
  })
  return category_inner;
}

export const state = () => ({
  menu_items: [],
  current_category: {},
  current_product: {},
})
export const mutations = {
  SET_MENU_ITEMS (state, menu) {
    state.menu_items = menu
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.current_category = category
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.current_product = product
  }
}
export const actions = {
  async nuxtServerInit ({commit}) {
    await commit('SET_MENU_ITEMS', menu)
  },
  async getCurrentCategory ({ commit }, { route }) {
    await sleep(1000)
    const category = menu.find((cat) => cat.href === route.params.SpecificCategory)
    const products = await this.$axios.$get('/mock/products.json');
    await commit('SET_CURRENT_CATEGORY', add_category_products(products, category))
  }
}