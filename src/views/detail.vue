<template>
     <div class="user">
        <div class="u">
            我是user:{{ $route.query.item }}
        </div>
        <h2>user</h2>
        <hr>
        <router-link to="/home/detail/module1">myModule1</router-link>
    <router-link to="/home/detail/module2">myModule2</router-link>
        <router-view></router-view>
     </div>
</template>
<script>
export default({
    name:"myDetail"
})
</script>
<style>
.user{
    background-color: blueviolet;
}
.u{
    width: 150px;
    height: 20px;
    background-color: rgb(42, 200, 14);
    border-radius: 20px;
    color:white;
}

</style>