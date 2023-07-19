import VueRouter from 'vue-router'
import myHome from '../views/home.vue'
import myAbout from '../views/about.vue'
import myDetail from '../views/detail.vue'
import myModule1 from '../views/module1.vue'
import myModule2 from '../views/module2.vue'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:myHome,
            children:[
                {
                    path:'detail',
                    component:myDetail,
                    children:[
                        {
            path:'module1',
            component:myModule1
        },
        {
            
            path:'module2',
            component:myModule2
        }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:myAbout
        },
        
    ]
})