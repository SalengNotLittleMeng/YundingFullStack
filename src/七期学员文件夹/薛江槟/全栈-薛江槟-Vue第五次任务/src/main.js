
import router from "./router/index.js"

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
