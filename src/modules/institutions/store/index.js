import Vue from "vue";
import {
  institutionsCollection,
  requestsCollection,
  resourcesCollection
} from "@/firebase";

const Institutions = {
  namespaced: true,
  state: {
    institute: null,
    fetching_institute: false,
    fetching_requests: false,
    fetching_resources: false,
    requests: [],
    resources: []
  },
  getters: {
    get_institute(state) {
      return state.institute;
    },
    get_institute_id(state) {
      return state.institute.institution_id;
    },
    fetching_institute(state) {
      return state.fetching_institute;
    },
    fetching_requests(state) {
      return state.fetching_requests;
    },
    get_requests(state) {
      console.log({ state });
      return state.requests ? state.requests.slice().reverse() : [];
    },
    fetching_resources(state) {
      return state.fetching_resources;
    },
    get_resources(state) {
      console.log({ state });
      return state.resources ? state.resources.slice().reverse() : [];
    }
  },
  mutations: {
    SET_INSTITUTE(state, payload) {
      Vue.set(state, "institute", payload);
    },
    RESET_INSTITUTE(state) {
      Vue.set(state, "institute", null);
    },
    SET_REQUESTS(state, payload) {
      Vue.set(state, "requests", payload);
    },
    RESET_REQUESTS(state) {
      Vue.set(state, "requests", null);
    },
    SET_RESOURCES(state, payload) {
      Vue.set(state, "resources", payload);
    },
    RESET_RESOURCES(state) {
      Vue.set(state, "resources", null);
    },
    SET_FETCHING_INSTITUTE(state, payload) {
      Vue.set(state, "fetching_institute", payload);
    },
    SET_FETCHING_REQUESTS(state, payload) {
      Vue.set(state, "fetching_requests", payload);
    },
    SET_FETCHING_RESOURCES(state, payload) {
      Vue.set(state, "fetching_resources", payload);
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
        institutions.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          docs.push(doc.data());
        });
        // console.log("p", docs[0]);
        if (docs && docs.length) {
          commit("SET_INSTITUTE", docs[0]);
        } else {
          commit("RESET_INSTITUTE");
        }
        setTimeout(() => {
          commit("SET_FETCHING_INSTITUTE", false);
        }, 200);
      } else {
        commit("RESET_INSTITUTE");
      }
    },
    async fetch_requests_of_institute(
      { commit, state },
      config = { loading: true }
    ) {
      if (state.institute.institution_id) {
        if (config.loading) commit("SET_FETCHING_REQUESTS", true);
        let requests = await requestsCollection
          .where("institution_id", "==", state.institute.institution_id)
          .get();
        let docs = [];
        requests.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          docs.push(doc.data());
        });
        // console.log("p", docs[0]);
        if (docs && docs.length) {
          commit("SET_REQUESTS", docs);
        } else {
          commit("RESET_REQUESTS");
        }
        setTimeout(() => {
          if (config.loading) commit("SET_FETCHING_REQUESTS", false);
        }, 200);
      }
    },
    async fetch_resources_of_institute(
      { commit, state },
      config = { loading: true, institution_id: null }
    ) {
      if (config.institution_id || state.institute.institution_id) {
        if (config.loading) commit("SET_FETCHING_RESOURCES", true);
        let resources = await resourcesCollection
          .where(
            "institution_id",
            "==",
            config.institution_id
              ? config.institution_id
              : state.institute.institution_id
          )
          .get();
        let docs = [];
        resources.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          docs.push(doc.data());
        });
        // console.log("p", docs[0]);
        if (docs && docs.length) {
          commit("SET_RESOURCES", docs);
        } else {
          commit("RESET_RESOURCES");
        }
        setTimeout(() => {
          if (config.loading) commit("SET_FETCHING_RESOURCES", false);
        }, 200);
      }
    }
  }
};
export default Institutions;
