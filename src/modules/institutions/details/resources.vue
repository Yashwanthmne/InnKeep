<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="openAddResource">Add New</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-progress-linear
        v-if="$store.getters['Institutions/fetching_resources']"
        indeterminate
        color="green"
      ></v-progress-linear>
      <v-container v-else-if="get_resources && get_resources.length">
        <v-row>
          <v-col>
            <v-card
              outlined
              elevation="4"
              tile
              v-for="(resource, index) in get_resources"
              :key="index"
              style="margin-bottom: 26px;"
            >
              <v-card-title>
                {{ resource.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ resource.desc }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <create-resource
      v-if="create_resource.open"
      @close="closeAddResource"
    ></create-resource>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CreateResource from "@/modules/institutions/details/create_resource";
export default {
  components: {
    CreateResource
  },
  data() {
    return {
      create_resource: {
        open: false
      },
      timestamp: null
    };
  },
  mounted() {
    this.fetch_resources_of_institute();
    // setInterval(() => {
    //   console.log("helmo");
    //   this.fetch_resources_of_institute({ loading: false });
    // }, 7000);
  },
  methods: {
    ...mapActions("Institutions", ["fetch_resources_of_institute"]),
    openAddResource() {
      console.log("mnbnm,mnbnmn");
      this.$set(this, "create_resource", {
        open: true
      });
    },
    closeAddResource(config = { reload: false }) {
      this.$set(this, "create_resource", {
        open: false
      });
      if (config.reload) {
        this.fetch_resources_of_institute();
      }
    }
  },
  computed: {
    ...mapGetters("Institutions", ["get_resources"])
  },
  beforeDestroy() {
    clearInterval(this.timestamp);
  }
};
</script>

<style></style>
