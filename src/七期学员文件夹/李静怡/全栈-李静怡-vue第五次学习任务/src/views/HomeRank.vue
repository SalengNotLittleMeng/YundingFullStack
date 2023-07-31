<template>
    <div>
        <h4>你的选择</h4>
        <div class="showDiv">
            <span  v-for="item in $route.query">
                {{ item }}
            </span>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import {showItem} from './HomeProduct.vue'
    // for (i in $route.query){

    // }
    // import { homeProduct } from "./HomeProduct.vue";
    // const pro=ref(undefined)
    // const sshowItem=pro.value.showItem
    // 尝试保持输入框内容
    function beforeRouteLeave(to,from,next){
        to.meta.keepAlive = true
        next(0)
    }
</script>

<style scoped>
    .showDiv {
        color: #41b883;
    }
</style>
