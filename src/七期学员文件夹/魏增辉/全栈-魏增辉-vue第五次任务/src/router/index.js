import { createRouter, createWebHistory, routerKey } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import List from '../components/list.vue'
import choice from '../components/choice.vue'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',redirect:'/home',
        },
        {
            path:'/home',component:Home,
            children:[
                {
                    path:'list',
                    component:List,
                },
                {
                    name: 'Choice',
                    path:'choice',
                    component:choice,
                }
            ],
        },
        {
            path:'/about',
            component:About,
        },
    ]
})

