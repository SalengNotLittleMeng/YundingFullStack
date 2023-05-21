<script>

</script>
<template>
    <h2>我是home组件</h2>
    <div>
        <router-link to="/home/list">展示列表</router-link>
        <span>|</span>
        <router-link to="/home/choice">你的选择</router-link>
    </div>
    <router-view>

    </router-view>
</template>
<style>
</style>