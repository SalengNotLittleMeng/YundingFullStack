import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
import About from "../view/About.vue";
import list from "../view/list.vue";
import selceted from "../view/selected.vue";

const router = createRouter({
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        { path: "list", component: () => import("../view/list.vue") },
        { path: "selected",component: () => import("../view/selected.vue")  }, 
      ],
    },
    { path: "/about", component: About },
  ],
});
export default router;
