import Vue from "vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
console.log("test");

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";

import "material-design-icons-iconfont/dist/material-design-icons.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAzKwxsGXcfgPExNEOAUWWRhIWcCOOh7rk",
  authDomain: "innkeep-13353.firebaseapp.com",
  databaseURL: "https://innkeep-13353-default-rtdb.firebaseio.com",
  projectId: "innkeep-13353",
  storageBucket: "innkeep-13353.appspot.com",
  messagingSenderId: "797260103533",
  appId: "1:797260103533:web:6873599abe9c98d3a0a464",
  measurementId: "G-QQLVYTKCED"
};

firebase.initializeApp(configOptions);

// AUTH
import auth from "@/modules/auth/auth";
Vue.prototype.$auth = auth;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
