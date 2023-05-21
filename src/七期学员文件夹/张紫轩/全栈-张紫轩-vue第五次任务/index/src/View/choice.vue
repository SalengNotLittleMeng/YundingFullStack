<template>
    <div>
        <h3>你的选择是</h3>
        <h4>{{ this.$route.query.option }}</h4>
        <h4 v-if="!this.$route.query.option">未选择</h4>
    </div>
</template>

<script >
</script>

<style>

</style>