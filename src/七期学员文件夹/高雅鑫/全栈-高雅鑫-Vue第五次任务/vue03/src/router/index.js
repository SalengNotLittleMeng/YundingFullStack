import { createRouter, createWebHashHistory } from 'vue-router'
/*
import Home from '../router/Home.vue'
import About from '../router/About.vue'
import Showlist from '../router/Showlist.vue'
import Option from '../router/Option.vue'
*/
const routes = [
    { path:'/',redirect: '/home'},
    { path: '/home', component:() => import('../router/home.vue') } ,
    { path: '/about', component:()=> import('../router/about.vue') } ,
    { path: '/showlist',component:()=> import('../router/Showlist.vue')},
    { path:'/option',component:()=> import('../router/Option.vue')}
    ]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router