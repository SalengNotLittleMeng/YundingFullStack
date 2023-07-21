<template>
    <div class="main">
        <div class="nav">
            <router-link to="/home">home</router-link>
            <span>|</span>
            <router-link to="/about">about</router-link>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
</script>

<style>
.main {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
}

.nav {
    position: relative;
    width: 100px;
    left: 50%;
    transform: translateX(-50%);
}

.content {
    position: absolute;
}
</style>