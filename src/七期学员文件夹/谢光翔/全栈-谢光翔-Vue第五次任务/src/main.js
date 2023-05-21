import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

