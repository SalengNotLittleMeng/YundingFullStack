import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import List from './components/List.vue'
import Selected from './components/Selected.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'/home',
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'list',
                    component: List,
                },
                {
                    path: 'selected',
                    name: 'selected',
                    component: Selected,
                    props: route => ({ title: route.query.title })
                },
            ],
        },
        {
            path: '/about',
            component: About,
        }
    ],
})