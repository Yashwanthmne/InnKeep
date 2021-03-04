import firebase from "firebase";
import router from "@/router";
import { auth, usersCollection } from "@/firebase";
import store from "@/store";

export default {
  user: {
    authenticated: false
  },

  login({ email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  register({ email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          // create user profile object in userCollections
          usersCollection
            .doc(user.uid)
            .set({
              email: email,
              name: "DUMMY"
            })
            .then(() => {
              resolve(user);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  async logout() {
    auth
      .signOut()
      .then(() => {
        // clear userProfile and redirect to /login
        store.commit("SET_USER", {});
        router.push({ name: "signin" });
      })
      .catch(() => {});
  },

  is_authenticated() {
    return auth.currentUser;
  }
};
