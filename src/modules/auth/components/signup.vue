<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <v-toolbar-title>Signup</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-container fill-height>
            <v-layout class="verticalLine" align-center justify-center>
              <v-flex xs8>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    prepend-icon="mdi-account"
                    name="name"
                    label="Name"
                    type="text"
                  />
                  <v-text-field
                    v-model="company"
                    prepend-icon="mdi-home"
                    name="company"
                    label="Company Name"
                    type="text"
                  />
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    prepend-icon="mdi-mail"
                    name="email"
                    label="Email"
                    type="text"
                  />
                  <v-text-field
                    v-model="password"
                    :rules="[v => !!v || 'Password is required']"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  />
                </v-form>
                <v-spacer />
                <v-layout column>
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="test"
                    @click="onSignUp"
                    >Signup</v-btn
                  >
                  <p>
                    Got an account? Login here
                    <router-link :to="{ name: 'signin' }">Login</router-link>
                  </p>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: false,
      name: "",
      company: "",
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail is invalid"
      ]
    };
  },
  computed: {
    ...mapGetters("AuthStore", ["get_user", "loading"]),
    user() {
      return this.get_user;
    },
    loading() {
      return this.loading;
    }
  },
  mounted() {
    if (this.$auth.is_authenticated()) {
      this.$router.push({ name: "home" });
    }
  },
  watch: {
    user(newValue) {
      if (newValue) {
        this.$router.replace({ name: "home" });
      }
    }
  },
  methods: {
    ...mapActions("AuthStore", ["signUp"]),
    onSignUp() {
      this.signUp({
        name: this.name,
        company: this.company,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
