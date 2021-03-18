import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "white",
        accent: "#3f51b5",
        error: "#b71c1c"
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
