import Vue from 'vue';
import Vuex from 'vuex';
import { getFavorites } from '@/services/UserService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    setFavorite(state, favorite) {
      const idx = state.favorites.findIndex((favoriteCharacter) => favoriteCharacter.id === favorite.ref_api);
      if (idx > -1) {
        state.favorites.splice(idx, 1);
      } else {
        state.favorites.push({ id:parseInt(favorite.ref_api) , idRegister:favorite.id});
      }
    }
  },
  actions: {
    addCharacter({ commit }, id) {
      commit('setFavorite', {ref_api: id});
    },
    async listFavorites({ commit }){
      const response = await getFavorites()
      response.data.map((favorite) => commit('setFavorite', favorite))
    }
  },
  getters: {
    someFavorite: (state) => (id) => {
      return state.favorites.some((favorite) => favorite.id === id);
    },
    getFavorite: (state) => (id) => {
      return state.favorites.find((favorite) => favorite.id === id);
    }
  }
});
