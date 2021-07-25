import Vue from "vue";
import Axios from "axios";
Vue.use(Axios);

const state = {
  stocks: [],
  stock: {},
}
const mutations= {
  setStockList(state, stocks) {
    state.stocks = stocks
  },
  setStock(state, stock) {
    state.stock = stock
  }
}
const getters= {
  stockList: (state) => state.stocks,
}
const actions= {
  async getStockList({commit}) {
    await Axios.get('https://kopwar.com.mm/webapp/api/new_api/index.php')
    .then( response => {
        commit('setStockList', response.data)
    })
    .catch(error => console.log(error.response));
  },
  async saveStock(payload) {
    await Axios.post('https://kopwar.com.mm/webapp/api/new_api/api-create.php', {
        "name": payload.name,
        "price": payload.price
    })
    .then({
      // 
    })
    .catch(error => console.log(error.response));
  },
  async updateStock(payload) {
    var url = '	https://kopwar.com.mm/webapp/api/new_api/api-update.php'
    await Axios.put(url, {
      "id": payload.product_id,
      "name": payload.product_name,
      "price": payload.product_price
    })
    .then({
      // 
    })
    .catch(error => console.log(error.response));
  },
  async deleteStock({dispatch}, payload) {
    var url = 'https://kopwar.com.mm/webapp/api/new_api/api-delete.php'
    await Axios.delete(url, 
      {
        "id": payload
      })
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getStockList')
  },
  async searchStock({dispatch, commit}, payload) {
    var url = '	https://kopwar.com.mm/webapp/api/new_api/api-search.php'
    await Axios.post(url,
      {
        "search" : payload
      }
    )
    .then( response => {
      commit('setStockList', response.data)
   })
    .catch(error => console.log(error.response));
    dispatch('getStockList')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}
