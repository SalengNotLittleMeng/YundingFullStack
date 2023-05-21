import { createRouter, createWebHashHistory } from "vue-router";
import home from "../View/home.vue"
import about from "../View/about.vue"
import display from "../View/display.vue"
import choice from "../View/choice.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        {
            path: "/home",
            component: home,
            children: [
                {
                    path: "display",
                    component: display,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "choice",
                    component:choice
                },
                {
                    path: "",
                    redirect:"/home/display"
                }
            ]
        },
        { path: "/about", component: about },
    ]
})


export default router