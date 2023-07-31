<template>
    <div>
        <h3>home</h3>
        <div>
            <router-link to="/home/product">展示列表</router-link>
            |
            <router-link to="/home/rank">你的选择</router-link>
        </div>
        <!-- <router-view></router-view> -->
        

    </div>
</template>

<script>
export default {
    data() {
        return{
        }
    }
}
</script>

<style scoped>
</style>