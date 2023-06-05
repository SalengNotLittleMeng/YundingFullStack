<template>
    <h2>我是home组件</h2>
    <ul>
    <li><router-link to="/home/list">事项列表</router-link></li>  
    <li><router-link to="/home/choice">您的选择是</router-link></li>
    </ul>
     
     <router-view v-slot="{Component}">
        <KeepAlive>
            <component :is="Component"></component>
        </KeepAlive>
     </router-view>
     
    
</template>
<script setup>
    import list from './home.vue'
    import choice from './choice.vue'
    
    const component = {
        list,
        choice
    }

</script>
<style scoped >
    .add{
        width: 300px;
        height: 40px;
        border-radius: 20px;
        font-size: 30px;
    }
    ul{
        list-style: none;
    }
    ul li{
        color: chartreuse;
        display:inline-block;
        margin: 0px 10px;
    }
</style>