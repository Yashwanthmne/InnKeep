<template>
  <v-progress-linear
    v-if="$store.getters['Institutions/fetching_requests']"
    indeterminate
    color="green"
  ></v-progress-linear>
  <v-container
    v-else-if="
      $store.getters['Institutions/get_requests'] &&
        $store.getters['Institutions/get_requests'].length
    "
  >
    <v-row>
      <v-col>
        <v-card
          outlined
          tile
          v-for="(request, index) in $store.getters[
            'Institutions/get_requests'
          ]"
          :key="index"
        >
          <v-card-title>
            {{ request.type }}

            <v-chip
              class="ma-2"
              :color="request.isOpen ? 'orange' : 'green'"
              small
            >
              {{ request.isOpen ? "Open" : "Closed" }}
            </v-chip>
          </v-card-title>
          <v-card-subtitle>
            {{ request.desc }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn @click="openEditRequest({ request: request })">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <edit-request
        v-if="edit_request.open"
        :request="edit_request.request"
        @close="closeEditRequest"
      ></edit-request>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import EditRequest from "@/modules/institutions/details/edit_request";
export default {
  components: {
    EditRequest
  },
  data() {
    return {
      edit_request: {
        open: false,
        request: null
      },
      timestamp: null
    };
  },
  mounted() {
    this.fetch_requests_of_institute();
    setInterval(() => {
      console.log("helmo");
      this.fetch_requests_of_institute({ loading: false });
    }, 7000);
  },
  methods: {
    ...mapActions("Institutions", ["fetch_requests_of_institute"]),
    openEditRequest({ request }) {
      this.$set(this, "edit_request", {
        open: true,
        request: request
      });
    },
    closeEditRequest(config = { reload: false }) {
      this.$set(this, "edit_request", {
        open: false,
        request: null
      });
      if (config.reload) {
        this.fetch_requests_of_institute();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timestamp);
  }
};
</script>

<style></style>
