<template>
  <v-container fluid v-if="$store.getters['user']">
    
    <v-row class="fill-height">
      <v-col>
        <v-toolbar-title style="padding:16px;">
          Welcome {{ $store.getters["user"].name }}
        </v-toolbar-title>
        <!-- <v-progress-circular
          v-if="$store.getters['AdminDashboard/fetching_institutions']"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <v-data-table
          v-else-if="
            !$store.getters['AdminDashboard/fetching_institutions_error']
          "
          :headers="$options.headers"
          :items="$store.getters['AdminDashboard/get_institutions']"
          class="elevation-1"
          no-data-text=""
        ></v-data-table> -->
        <!-- <div v-else>
          {{ $store.getters["AdminDashboard/fetching_institutions_error"] }}
        </div> -->
        <institution></institution>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import institution from "@/modules/institutions/details/institution";
export default {
  components: { institution },
  headers: [
    { text: "Name", value: "name" },
    { text: "Total Resources", value: "total_resources" },
    { text: "Type", value: "type" }
  ],
  mounted() {
    this.$store.dispatch("AdminDashboard/fetch_institutions");
  }
};
</script>
