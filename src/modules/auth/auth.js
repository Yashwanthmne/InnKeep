import firebase from "firebase";
import router from "@/router";

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
          localStorage.setItem("user", JSON.stringify(user));
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
          console.log({ user })
          localStorage.setItem("user", JSON.stringify(user));
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  logout() {
    localStorage.removeItem("user");
    router.push({ name: "sign-in" });
  },

  get is_authenticated() {
    return !!localStorage.getItem("user");
  }
};
