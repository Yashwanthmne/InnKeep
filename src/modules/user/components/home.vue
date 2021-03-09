<template>
  <v-main>
    <v-container fill-height fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="primary">
              <v-toolbar-title>Add Request</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
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
                
                color="primary"
                @click="submit"
                data-testid="button-login"
                >Submit</v-btn
              >
              <v-spacer />
              <v-divider class="mt-5" />
              
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();

export default {
  name: "add-request",
  data() {
    return {
      type:"",
      desc:"",
    };
  },
  methods: {
    submit() {
        console.log(this.type);
        
        db.collection("requests")
        .add({type: this.type, desc: this.desc})
        .then(() => {
            console.log("Sucess!");
        })
        .catch((error) => {
            console.error("Error: ", error)
        })
     
    },

  }
};
</script>