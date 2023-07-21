import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home.vue";
import about from "../views/about.vue";
import list from "../views/list.vue";
import choice from "../views/choice.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        {
            path: "/home",
            component: home,
            children: [
                {
                    path: "list",
                    component: list,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "choice",
                    component: choice,
                },
                {
                    path: "",
                    redirect:"/home/list",
                }
            ]
        },
        { path: "/about", component: about },
    ]
})

export default router