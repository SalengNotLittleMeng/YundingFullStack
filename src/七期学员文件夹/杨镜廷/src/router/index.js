import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import Choice from '../components/choice.vue'
import List from '../components/list.vue'



const router = createRouter({
  history:createWebHistory(),//指定采用的模式  666666666666666666666666666666搞了我你妈一晚上，哈西不能用
  routes:[
    {
      path:"/home",
      component:Home,
      children:[
      {
        path:"/home/choice/:content",
        component:Choice
      },
      {
        path:"list",
        component:List
      }
      ]
    },
    {
      path:"/about",
      component:About
    },
  ]
})


export default router