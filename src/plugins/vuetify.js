import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark:true, themes:{
        dark:
            {
                primary: '#080D15',
                secondary: '#161B22',
                accent: '#2FC1FF',
                error: '#CF6679',
                warning: '#CF6679',
                info: '#FFE926',
                success: '#6FCF97'
            }
    } },
  })