import { createRouter,createWebHashHistory } from "vue-router";
const router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:()=>import("../Views/Home.vue"),
      children:[
        {
          path:"list",
          component:()=>import("../Views/HomeList.vue")
        },
        {
          path:"select",
          component:()=>import("../Views/HomeSelect.vue")
        }
      ]
    },
    {
      path:"/about",
      component:()=>import("../Views/About.vue")
    }
  ]
})
export default router