<template>
<v-app
    :style="{
      'background-image': 'url(' + require('@/assets/images/bg.png') + ')'
    }"
  >
  <transition mode="out-in">
    <!-- <Main></Main> -->
    <router-view></router-view>
  </transition>
  </v-app>

  
</template>

<script>
import { mapGetters } from "vuex";
// import Main from "./views/main";
export default {
  name: "App",
  // components: { Main },
  mounted() {
    this.check_authenticated();
  },
  computed: {
    ...mapGetters("AuthStore", ["is_authenticated"])
  },
  created() {
    this.$store.dispatch("fetch_institution_types");
  },
  methods: {
    check_authenticated() {
      if (
        !(
          this.$auth.is_authenticated() ||
          this.$route.name == "signin" ||
          this.$route.name == "signup"
        )
      ) {
        this.$router.push({ name: "signin" });
      }
    }
  },
  watch: {
    "$auth.authenticated"() {
      this.check_authenticated();
    }
  }
};
</script>
