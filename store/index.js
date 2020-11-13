import { menu } from './menu';

const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  menu_items: [],
  current_category: {}
})
export const mutations = {
  SET_MENU_ITEMS (state, menu) {
    state.menu_items = menu
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.current_category = category
  }
}
export const actions = {
  async getMenuItems ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_MENU_ITEMS', menu)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async getCurrentCategory ({ commit }, { route }) {
    await sleep(1000)
    const category = menu.find((cat) => cat.href === route.params.SpecificCategory)
    await commit('SET_CURRENT_CATEGORY', category)
  }
}