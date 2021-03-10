<template>
  <v-card>
    <v-progress-linear
      v-if="$store.getters['Institutions/fetching_institute']"
      indeterminate
      color="green"
    ></v-progress-linear>
    <v-container v-else-if="$store.getters['Institutions/get_institute']">
      <v-row>
        <v-col>
          <v-card-title>
            {{ $store.getters["Institutions/get_institute"].name }}
          </v-card-title>

          <v-card outlined tile>
            <v-card-subtitle>
              Share/Open this link to raise an issue: {{ url }}/raise-issue/{{ $store.getters["Institutions/get_institute"].institution_id }}
            </v-card-subtitle>
          </v-card>

          <v-tabs v-model="tab" grow color="accent">
            <v-tab>
              Issues
            </v-tab>
            <v-tab>
              Resources
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: window.location.origin,
    };
  },
  computed: {
    ...mapGetters("AdminDashboard", {
      active_institution_id: "active_institution_dashboard"
    })
  },
  methods: {
    ...mapActions("Institutions", ["fetch_institute"])
  },
  watch: {
    active_institution_id() {
      this.fetch_institute(this.active_institution_id);
    }
  }
};
</script>

<style></style>
