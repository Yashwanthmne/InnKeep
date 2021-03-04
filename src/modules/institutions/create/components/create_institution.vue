<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog max-width="600" :value="true">
        <template v-slot:default>
          <v-card>
            <v-toolbar color="primary" dark>
              New Institution
            </v-toolbar>
            <v-card-text>
              <div>
                <v-text-field
                  label="Name*"
                  hide-details="auto"
                  v-model="form.name"
                ></v-text-field>
                <v-select
                  :items="$store.getters['institution_types']"
                  label="Institution Type*"
                  v-model="form.type"
                />
                <v-text-field
                  label="Total Resources"
                  v-model="form.total_resources"
                ></v-text-field>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="$emit('close')"
                style="margin-right:12px;"
                :disabled="saving"
                >Close
              </v-btn>
              <v-btn
                text
                @click="save"
                :disabled="saving || is_save_disabled"
                :loading="saving"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { institutionsCollection } from "@/firebase";
export default {
  data() {
    return {
      saving: false,
      form: {
        name: "",
        type: "",
        total_resources: null
      }
    };
  },
  computed: {
    is_save_disabled() {
      return !this.form.name || !this.form.type;
    }
  },
  methods: {
    save() {
      this.saving = true;
      institutionsCollection
        .doc()
        .set({
          name: this.form.name,
          type: this.form.type,
          total_resources: this.form.total_resources
        })
        .then(() => {
          console.log("Document successfully written!");
          this.$store.dispatch("AdminDashboard/fetch_institutions");
          this.$emit("close");
        })
        .catch(error => {
          console.error("Error writing document: ", error);
          this.saving = false;
        });
    }
  }
};
</script>

<style></style>
