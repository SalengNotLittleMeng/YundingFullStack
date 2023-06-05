import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/home",
            component: () => import("../views/home.vue"),
            children: [
                {
                    path: "list",
                    component: () => import("../views/list.vue"),
                    // meta: { 
                    //     leaveCaches:['/choice']
                    //  }
                },
                {
                    path: "choice",
                    component: () => import("../views/choice.vue")
                }
            ],
            
        },
        {
            path: "/about",
            component:() => import("../views/about.vue")
        },

    ]

})



export default router