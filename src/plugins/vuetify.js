import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import store from "@/store";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: store.state.theme.dark,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: "#080D15",
        secondary: "#161B22",
        accent: "#2FC1FF",
        error: "#CF6679",
        warning: "#CF6679",
        info: "#FFE926",
        success: "#6FCF97"
      }
    }
  }
});
