const sleep = m => new Promise(r => setTimeout(r, m))
export const categories = 
[
    {
        name: "Главная",
        href: ""
    },
    {
        name: "О нас",
        href: "about_us"
    },
    {
        name: "Контакты",
        href: "contacts"
    }
];

export const state = () => ({
  categoriesList: []
})
export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  }
}
export const actions = {
  async getCategoriesList ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_CATEGORIES_LIST', categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
}