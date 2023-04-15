<template>
    <div class="footer">

        <button @click="add" v-show="addShow">添加</button>
        <button @click="confirm" v-show="!addShow">确认</button>
        <button @click="cancel" v-show="!addShow">取消</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    data() {
        return {
            addShow: true,
        }
    },
    methods: {
        //添加图书
        add() {
            this.addShow = !this.addShow
            this.$emit('addShow', this.addShow)
        },
        //确定添加
        confirm() {
            this.addShow = !this.addShow
            this.$emit('addShow', this.addShow, "true")
        },
        //取消添加
        cancel() {
            this.addShow = !this.addShow
            this.$emit('addShow', this.addShow, "false")
        }
    }
}
</script>

<style scoped>
button {
    margin: 20px 10px;
}
</style>