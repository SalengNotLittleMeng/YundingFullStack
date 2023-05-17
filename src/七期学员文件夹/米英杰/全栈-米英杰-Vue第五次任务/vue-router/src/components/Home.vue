<script setup>
import { ref } from 'vue';
const title = ref("")
function onTitle(item) {
    title.value = item
}
</script>
<template>
    <h2>我是Home组件</h2>
    <div class="title">
        <router-link to="/home/list">展示列表</router-link>
        <span>|</span>
        <!-- <router-link to="{ name:'selected',query:{ title: title }}">你的选择</router-link> -->
        <router-link to="/home/selected">你的选择</router-link>
    </div>
    <router-view @onTitle="onTitle" v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>