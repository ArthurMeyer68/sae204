import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDaJRqvuzsP4uj3X5lJ5e3uucMJVym6Kkk",
    authDomain: "sae204-meyer-arthur.firebaseapp.com",
    projectId: "sae204-meyer-arthur",
    storageBucket: "sae204-meyer-arthur.appspot.com",
    messagingSenderId: "507941544048",
    appId: "1:507941544048:web:4dc48e0b56854c5a0814b5"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
