import {createRouter,createWebHashHistory} from "vue-router";
import home from "./components/home"
import about from "./components/about"
import list from "./components/list"
import choose from "./components/choose"
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:home,
            children: [
                {
                  path: 'list',
                  name:"list",
                  component: list,
                },
                {
                  path: 'choose',
                  component: choose,
                },
              ],
        },
        {
            path:"/about",
            component:about,
            props: true,
        }
    ]
});

export default router;
