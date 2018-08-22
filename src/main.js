// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyBhJQVSytxDTTnH1MhIboHp1SYM8W4BMV4",
  authDomain: "first-7fe86.firebaseapp.com",
  databaseURL: "https://first-7fe86.firebaseio.com",
  projectId: "first-7fe86",
  storageBucket: "gs://first-7fe86.appspot.com",
  messagingSenderId: "15591920287"
};
firebase.initializeApp(config);

window.firebase=firebase;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
