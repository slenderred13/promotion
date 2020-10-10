import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    page : 1
  },
  getters: {
    items: state => state.items
  },
  mutations: {
    setItem: (state, { payload }) => {
      state.items.push(payload)
    },
  },
  actions: {
    setItem({ commit }, payload) {
      commit("setItem", { payload });
    },
  },
  
  modules: {
  }
})