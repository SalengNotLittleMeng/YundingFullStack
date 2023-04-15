<template>

<div>
    <div v-if = "change == false">
        <button @click = "addbook" >添加</button>
    </div>

<div v-else>
        <button @click = "determine">确认</button>
        <button @click = "cancel">取消</button>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            change: false,
            more: false,
        }
    },
    methods: {
        addbook() {
            this.change = true
            this.more = true
            this.$emit("more", this.more)
        },
        determine() {
            this.change = false
            this.more = false
        },
        cancel() {
            this.change = false
            this.more = false
            this.$emit("more", this.more)
        }
    },
    watch: {

    }
}
</script>

<style scoped>
button {
    margin-top: 20px;
}
</style>