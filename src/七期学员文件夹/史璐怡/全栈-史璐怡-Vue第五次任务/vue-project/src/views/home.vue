<template>
    <div>
        <div class="home">我是Home组件</div>
        <div class="nav2">
            <router-link to="/home/list">展示列表</router-link>
            <span>|</span>
            <router-link to="/home/choice">你的选择</router-link>
        </div>
        <router-view class="blank"></router-view>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

const router = useRouter()

function showbtn() {
    router.push({
        path: "/home/list",
    })
}

function choicebtn() {
    router.push({
        path: "/home/choice",
    })
}
</script>

<style>
.home {
    font-size: 40px;
    font-weight: 600;
}

.nav2 {
    position: relative;
    top: 20px;
    width: 136px;
    margin-left: 205px;
}

.blank {
    position: relative;
    top: 50px;
}
</style>