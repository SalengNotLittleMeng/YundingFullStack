<template>
    <div class="home">
        <h3>我是home组件</h3>
        <div class="bottom">
            <router-link to="/home/display">展示列表</router-link>
            <div>|</div>
            <keep-alive>
                <router-link to="/home/choice">你的选择</router-link>
            </keep-alive>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bottom {
    display: flex;
    margin: 20px auto;
    width: 150px;
    height: 30px;
    justify-content: space-between;
}
</style>