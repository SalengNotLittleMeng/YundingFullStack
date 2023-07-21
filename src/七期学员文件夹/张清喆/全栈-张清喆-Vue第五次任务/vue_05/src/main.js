import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App);
app.mount('#app');
import router from "./router.js"
app.use(router)
// import homerouter from "./home-router.js"
// app.use(homerouter)
