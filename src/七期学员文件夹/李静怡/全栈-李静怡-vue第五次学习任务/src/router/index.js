import {createRouter,createWebHashHistory} from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
const Home=()=>import(/*webpackChunkName:'home'*/"../views/Home.vue")
const About=()=>import(/*webpackChunkName:'about'*/"../views/About.vue")
const HomeProduct=()=>import("../views/HomeProduct.vue")
const HomeRank=()=>import("../views/HomeRank.vue")




// 创建一个路由：映射关系
const router =createRouter({
    // 指定采用的模式：hash模式
    history:createWebHashHistory(),
    // 映射关系
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"product",
                    component:HomeProduct,
                    meta:{
                        keepAlive:true  //尝试通过此方法来实现输入框中内容不变，未实现
                    }              
                },
                {
                    path:"rank",
                    component:HomeRank
                }
            ]

        },
        {
            path:"/about",
            component:About
        }

    ]
})

export  default router