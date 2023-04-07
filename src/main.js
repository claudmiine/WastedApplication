import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyBLP0ih0c89-eVk9XJfVqFbrzdsegtiWKI",
  authDomain: "wastedapp-7b023.firebaseapp.com",
  projectId: "wastedapp-7b023",
  storageBucket: "wastedapp-7b023.appspot.com",
  messagingSenderId: "988942344453",
  appId: "1:988942344453:web:98cb2c2850fd4a1204976c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    router.push({ path: 'landingpage' })
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
   
    // ...
  } else {
    console.log('user is not sign in')
  }
});


Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
