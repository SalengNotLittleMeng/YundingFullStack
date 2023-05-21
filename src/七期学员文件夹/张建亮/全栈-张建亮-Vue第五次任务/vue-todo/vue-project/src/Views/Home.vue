<template>
    <h2>我是Home的内容</h2>
    <div class="home-nav"></div>
    <RouterLink to="/home/selection">展示列表</RouterLink>
    &nbsp;
    <RouterLink to="/home/display">你的选择</RouterLink>
    <router-view></router-view>
</template>

<script>

export default {
    name: "Home",
}
</script>

<style></style>