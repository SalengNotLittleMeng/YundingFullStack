<script >
    export default { 
    mounted() { this.title = this.$route.query.title }, 
    data() { 
        return { title: '' } 
        } 
    } 
</script>
<template>
    <h2>你的选择是：</h2>
    <h2>{{ title }}</h2>
</template>
<style>
</style>