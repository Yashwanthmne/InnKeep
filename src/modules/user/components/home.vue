<template>
  <v-main>
    <v-container fill-height fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" v-if="!successMsg">
            <v-toolbar color="primary">
              <v-toolbar-title>Add Request</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  ref="name"
                  v-model="name"
                  label="name"
                  placeholder="Please enter your name"
                  required
                />

                <v-text-field
                  ref="email"
                  v-model="email"
                  label="email"
                  placeholder="Please enter email"
                  required
                />

                <v-text-field
                  ref="type"
                  v-model="type"
                  label="request"
                  placeholder="Please enter type of request"
                  required
                />
                <v-text-field
                  ref="desc"
                  v-model="desc"
                  label="desc"
                  placeholder="Enter descripton of request"
                  counter
                  required
                  @keydown.enter="login"
                />
              </v-form>
            </v-card-text>

            <v-layout column>
              <v-btn
                :disabled="!type || !desc || loading"
                :loading="loading"
                color="primary"
                @click="submit"
                data-testid="button-login"
                >Submit</v-btn
              >
              <v-spacer />
              <v-divider class="mt-5" />
            </v-layout>
          </v-card>
          <v-alert v-else type="success">{{ successMsg }}</v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import firebase from "firebase";
import { GET_RANDOM_ID } from "@/resources/getRandomId.js";
const db = firebase.firestore();

export default {
  name: "add-request",
  data() {
    return {
      name: "",
      email: "",
      type: "",
      desc: "",
      institution_id: "",
      request_id: "",
      isOpen: "",
      loading: false,
      successMsg: ""
    };
  },
  methods: {
    submit() {
      console.log(this.type);
      this.loading = true;
      db.collection("requests")
        .add({
          name: this.name,
          email: this.email,
          type: this.type,
          desc: this.desc,
          isOpen: true,
          institution_id: this.$route.params.id,
          request_id: GET_RANDOM_ID()
        })
        .then(() => {
          this.successMsg = "Request has been registered successfully!";
          console.log("Sucess!");
          this.loading = false;
        })
        .catch(error => {
          console.error("Error: ", error);
        });
    }
  }
};
</script>
