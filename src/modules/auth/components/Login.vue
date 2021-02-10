<template>

  <div class="d-flex justify-content-center align-items-center min-vh-100 w-100">
    <b-card
      class="p-4"
    >
      <h2>
        <b-avatar icon="lock-fill"></b-avatar> Login
      </h2>
      <b-form-group 
        id="fieldset-username"
        label="Email"
        label-for="input-username"
        :state="!!username"
        class="mb-4"
      >
        <b-form-input
          id="input-username"
          v-model="username"
          :state="!!username"
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-password"
        label="Password"
        label-for="input-password"
        :state="!!password"
        class="mb-4"
      >
        <b-form-input
          id="input-password"
          v-model="password"
          :state="!!password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <BButton @click="submit">Submit</BButton>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase";
import { BButton, BFormGroup, BFormInput, BAvatar } from "bootstrap-vue";
export default {
  name: "Login",
  components: {
    BButton,
    BFormInput,
    BFormGroup,
    BAvatar
  },
  data() {
    return {
      username: null,
      password: null
    };
  },

  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(data => {
          console.log("LOGGED IN WOOHOO! " + data);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped></style>
