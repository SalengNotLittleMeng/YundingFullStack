import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: "/HomeView"
    },
    {
      path: '/HomeView',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [{
        path: 'user/:id',
        component: () => import("../views/user.vue"),
        children: [{
          path: 'detail/:id2',
          component:()=>import("../views/detail.vue")
        }]
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component:()=> import("../views/not.vue")
    },
  ]
})

export default router
