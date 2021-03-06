<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dark>
        <div
          style="width:100%;display:flex;justify-content:space-between;align-items:center;"
        >
          <v-toolbar-title>InnKeep</v-toolbar-title>
          <div
            style="display:flex;justify-content:space-between;align-items:center;"
          >
            <v-btn
              style="margin-right:16px;"
              @click="$store.dispatch('open_create_institution_form')"
              v-if="is_authenticated"
              >Create Institution</v-btn
            >
            <v-btn @click="logout" v-if="is_authenticated">Logout</v-btn>
          </div>
        </div>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
        <create-institution
          v-if="$store.state.show_create_institution_form"
          @close="$store.dispatch('close_create_institution_form')"
        ></create-institution>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import CreateInstitution from "@/modules/institutions/create/components/create_institution.vue";

export default {
  components: { CreateInstitution },
  computed: {
    is_authenticated() {
      return this.$store.getters["is_authenticated"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("AuthStore/logout", {});
    }
  }
};
</script>

<style></style>
