import Vue from "vue";
import { institutionsCollection } from "@/firebase";

const Institutions = {
  namespaced: true,
  state: {
    institute: null,
    fetching_institute: false
  },
  getters: {
    get_institute(state) {
      return state.institute;
    },
    fetching_institute(state) {
      return state.fetching_institute;
    }
  },
  mutations: {
    SET_INSTITUTE(state, payload) {
      Vue.set(state, "institute", payload);
    },
    RESET_INSTITUTE(state) {
      Vue.set(state, "institute", null);
    },
    SET_FETCHING_INSTITUTE(state, payload) {
      Vue.set(state, "fetching_institute", payload);
    }
  },
  actions: {
    async fetch_institute({ commit }, institution_id) {
      if (institution_id) {
        commit("SET_FETCHING_INSTITUTE", true);
        let institutions = await institutionsCollection
          .where("institution_id", "==", institution_id)
          .get();
        let docs = [];
        institutions.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          docs.push(doc.data());
        });
        console.log("p", docs[0]);
        if (docs && docs.length) {
          commit("SET_INSTITUTE", docs[0]);
        } else {
          commit("RESET_INSTITUTE");
        }
        setTimeout(() => {
          commit("SET_FETCHING_INSTITUTE", false);
        }, 700);
      } else {
        commit("RESET_INSTITUTE");
      }
    }
  }
};
export default Institutions;
