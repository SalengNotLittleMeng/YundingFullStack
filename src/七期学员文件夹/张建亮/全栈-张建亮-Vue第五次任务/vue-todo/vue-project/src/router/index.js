import { createRouter, createWebHistory } from 'vue-router'
const home = () => import("../Views/About.vue")

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/about',
            name: 'about',
            component: home,

        },
        {
            path: '/home',
            name: 'home',
            component: () => import("../Views/Home.vue"),
            children: [
                {
                    path: '/home',
                    redirect: '/home/selection'
                },
                {
                    path: '/home/selection',
                    component: () => import("../Views/Selection.vue")
                },
                {
                    path: '/home/display',
                    component: () => import("../Views/Display.vue")
                }
            ]

        },
    ]
})