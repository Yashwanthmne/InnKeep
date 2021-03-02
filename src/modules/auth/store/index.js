import Vue from "vue";
import router from "@/router";
import auth from "../auth";

const AuthStore = {
  namespaced: true,
  state: {
    user: null,
    loading: false
  },
  getters: {
    get_user(state) {
      return state.user;
    },
    is_authenticated(state) {
      return !!state.user;
    },
    loading(state) {
      return state.loading;
    }
  },
  mutations: {
    SET_USER(state, { user }) {
      Vue.set(state, "user", user);
    },
    SET_LOADING(state, value) {
      Vue.set(state, "loading", value);
    }
  },
  actions: {
    signUserIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("SET_LOADING", true);
        auth
          .login({ email, password })
          .then(data => {
            commit("SET_USER", data);
            router.push({ name: "home" });
            resolve();
          })
          .catch(err => {
            reject(err);
          })
          .finally(() => {
            commit("SET_LOADING", false);
          });
      });
    },
    signUp({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("SET_LOADING", true);
        auth
          .register({ email, password })
          .then(data => {
            commit("SET_USER", data);
            router.push({ name: "home" });
            resolve();
          })
          .catch(err => {
            reject(err);
          })
          .finally(() => {
            commit("SET_LOADING", false);
          });
      });
    }
  }
};
export default AuthStore;
