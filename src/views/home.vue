<template>
    <div>
        <h3>home</h3>
        <div class="child">
            
            <input v-model="ok" @keydown="fill">
        <!-- 动态路由 -->
        <div class="mingzi" v-for="item in namelist" :key="item.id">
            <router-link :to="{
                path:'/home/detail',
                query:{
                    item:item
                }
            }">
                {{ item }}
            </router-link>
           
        </div>
        </div>
        <router-view></router-view>
        
    </div>

</template>
<script>
    export default({
        name:'myHome',
        data(){
          return{
            ok:'',
            namelist:[
                "张三","李四","王五"
            ]
          }
        },
        methods:{
            fill(){
                this.namelist.push(this.ok)
                this.ok=''
            }
        }
    })
</script>
<style scoped>
  
    .child{
        padding: 30px;
        width: 100%;
        height: 30px;
        background-color: bisque;
        display: flex;
        
    }
    .mingzi{
        margin-left: 5px;
    }
 
</style>