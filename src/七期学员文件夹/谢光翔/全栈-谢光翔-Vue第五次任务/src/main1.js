import { createApp } from 'vue'
import App1 from './App1.vue'
import { createRouter, createWebHistory } from 'vue-router'
import showList from './showList.vue'
import choice from './choice.vue'
import {ref} from 'vue'

const shared = ref(['aa','bb','cc'])
const routes = [
{ path:'/showList',name:'showList',component:showList},
{ path:'/choice',name:'choice',component:choice}
]

const router = createRouter({
history: createWebHistory(),
routes
})

const app1 = createApp(App1)
app1.use(router)
app1.provide('shared', shared)
app1.mount('#app1')