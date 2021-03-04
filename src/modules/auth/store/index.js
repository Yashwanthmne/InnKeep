import Vue from "vue";
import auth from "../auth";
import router from "@/router";
import { auth as firebase_auth } from "@/firebase";

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
    signUserIn({ commit, dispatch }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("SET_LOADING", true);
        auth
          .login({ email, password })
          .then(data => {
            commit("SET_USER", data);
            dispatch("fetchUserInfo", data, { root: true });
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
    signUp({ commit, dispatch }, { name, company, email, password }) {
      return new Promise((resolve, reject) => {
        commit("SET_LOADING", true);
        auth
          .register({ name, company, email, password })
          .then(data => {
            commit("SET_USER", data);
            Vue.$toast.success(
              `Welcome ${name}, Start by creating an institution :)`
            );
            dispatch("fetchUserInfo", data, { root: true });
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
    logout({ commit }) {
      firebase_auth
        .signOut()
        .then(() => {
          // clear userProfile and redirect to /login
          commit("SET_USER", {}, { root: true });
          router.push({ name: "signin" });
        })
        .catch(() => {});
    }
  }
};
export default AuthStore;
