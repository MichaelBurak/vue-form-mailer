// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'


Vue.config.productionTip = false

Vue.use(VueFire)
let app;
let config = {
  apiKey: "AIzaSyA6EVtqx5rGG2unHGxigl6iYpTmKk6nHZY",
  authDomain: "vue-form-mailer.firebaseapp.com",
  databaseURL: "https://vue-form-mailer.firebaseio.com",
  projectId: "vue-form-mailer",
  storageBucket: "vue-form-mailer.appspot.com",
  messagingSenderId: "1029262874157"
};
firebase.initializeApp(config);
export const db = firebase.firestore()

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
