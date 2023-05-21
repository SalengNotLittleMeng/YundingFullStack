<script> 
export default { 
    mounted() { this.choice = this.$route.query.choice }, 
    data() { 
        return { choice: '' } 
        } 
    } 
</script>
<template>
    <h3>你的选择是：</h3>
    <p>{{ choice  }}</p>
</template>