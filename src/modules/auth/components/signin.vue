<template>
  <v-main>
    <v-container fill-height fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Signin</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  ref="username"
                  v-model="email"
                  :rules="[() => !!email || 'This field is required']"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="TotallyNotThanos"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-snackbar v-model="snackbar" :color="color" :top="true">
              {{ errorMessages }}
              <v-btn dark text @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
            <v-layout column>
              <v-btn
                :disabled="!email || !password"
                :loading="loading"
                color="primary"
                @click="login"
                data-testid="button-login"
                >Login</v-btn
              >
              <v-spacer />
              <v-divider class="mt-5" />
              <p>
                Don't got an account? Signup here
                <router-link
                  :to="{
                    name: 'signup'
                  }"
                  >Signup</router-link
                >
              </p>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessages: "Incorrect login info",
      snackbar: false,
      color: "general",
      showPassword: false
    };
  },
  mounted() {
    if (this.$auth.is_authenticated()) {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters("AuthStore", ["is_authenticated", "loading"])
  },
  methods: {
    ...mapActions("AuthStore", ["signUserIn"]),
    login() {
      this.signUserIn({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
