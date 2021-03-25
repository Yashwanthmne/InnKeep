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
              <div
                style="display:flex;justify-content:space-between;width:100%;"
              >
                <div>
                  Share/Open this link to raise an issue:
                  <a
                    style="color:blue;"
                    target="_blank"
                    :href="get_service_request_form_link"
                    >{{ get_service_request_form_link }}
                  </a>
                </div>
                <v-icon style="cursor:pointer;" @click="show_qr_code = true">{{
                  icons.mdiQrcodeScan
                }}</v-icon>
              </div>
            </v-card-subtitle>
          </v-card>

          <v-tabs v-model="tab" grow color="accent">
            <v-tab>
              Requests
            </v-tab>
            <v-tab>
              Resources
            </v-tab>
            <v-tab>
              Services
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <requests></requests>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <resources></resources>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <services></services>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
        <qr-code
          :institute_name="$store.getters['Institutions/get_institute'].name"
          :request_form_link="get_service_request_form_link"
          v-if="show_qr_code"
          @close="show_qr_code = false"
        ></qr-code>
      </v-row>
    </v-container>
  </v-card>
</template>
<style scoped>
a {
  color: white;
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
import requests from "@/modules/institutions/details/requests";
import resources from "@/modules/institutions/details/resources";
import Services from "@/modules/institutions/details/services.vue";
import QrCode from "./qr_code.vue";
import { mdiQrcodeScan } from "@mdi/js";

export default {
  components: {
    requests,
    resources,
    Services,
    QrCode
  },
  data() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: window.location.origin,
      show_qr_code: false,
      icons: {
        mdiQrcodeScan
      }
    };
  },
  computed: {
    ...mapGetters("AdminDashboard", {
      active_institution_id: "active_institution_dashboard"
    }),
    get_service_request_form_link() {
      return `${this.url}/raise-issue/${this.$store.getters["Institutions/get_institute"].institution_id}`;
    }
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
