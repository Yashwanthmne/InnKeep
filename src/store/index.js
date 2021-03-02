import Vue from "vue";
import Vuex from "vuex";

import AuthStore from "../modules/auth/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    AuthStore
  }
});
export default store;
