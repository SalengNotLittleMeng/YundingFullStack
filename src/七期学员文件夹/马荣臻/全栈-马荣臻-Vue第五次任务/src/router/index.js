import { createRouter, createWebHistory } from "vue-router";

//创建router
const router = createRouter({
    history: createWebHistory(),
    //配置路由
    routes: [
        {
            path: "/",
            redirect: "/Home"
        },
        {
            path: "/home",
            component: () => import("../Views/Home.vue"),
            children: [
                {
                    path: 'list',
                    component: () => import("../Views/HomeList"),
                },
                {
                    path: 'selected',
                    component: () => import("../Views/HomeSelected"),
                },
            ],
        },
        {
            path: "/about",
            component: () => import("../Views/About.vue")
        },
        {
            path: "/:pathMatch(.*)",
            component: () => import("../Views/NotFound.vue")
        },
    ]
});

export default router

