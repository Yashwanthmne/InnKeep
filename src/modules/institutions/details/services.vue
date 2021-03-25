<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="openAddService">Add New Service</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-progress-linear
        v-if="$store.getters['Institutions/fetching_services']"
        indeterminate
        color="green"
      ></v-progress-linear>
      <v-container v-else-if="get_services && get_services.length">
        <v-row>
          <v-col>
            <v-card
              outlined
              elevation="4"
              tile
              v-for="(service, index) in get_services"
              :key="index"
              style="margin-bottom: 26px;"
            >
              <v-card-title>
                {{ service.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ service.desc }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <create-service
      v-if="create_service.open"
      @close="closeAddService"
    ></create-service>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CreateService from "@/modules/institutions/details/create_service";
export default {
  components: {
    CreateService
  },
  data() {
    return {
      create_service: {
        open: false
      },
      timestamp: null
    };
  },
  mounted() {
    this.fetch_services_of_institute();
    // setInterval(() => {
    //   console.log("helmo");
    //   this.fetch_resources_of_institute({ loading: false });
    // }, 7000);
  },
  methods: {
    ...mapActions("Institutions", ["fetch_services_of_institute"]),
    openAddService() {
      console.log("mnbnm,mnbnmn");
      this.$set(this, "create_service", {
        open: true
      });
    },
    closeAddService(config = { reload: false }) {
      this.$set(this, "create_service", {
        open: false
      });
      if (config.reload) {
        this.fetch_services_of_institute();
      }
    }
  },
  computed: {
    ...mapGetters("Institutions", ["get_services"])
  },
  beforeDestroy() {
    clearInterval(this.timestamp);
  }
};
</script>

<style></style>
