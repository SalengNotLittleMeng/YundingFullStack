<template>
    <div class="header">总价：￥{{ allValue }} 当前选中书籍《{{ selectedBook }}》</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: '',
        }
    },
    props: ['list', 'selectedBook'],
    computed: {
        //计算总价
        allValue() {
            //reduce（）方法遍历计算
            return this.list.reduce(function (pre, list) {
                return pre + (list.value * list.count)
            }, 0)
        }
    },



}


</script>

<style scoped>
.header {
    margin: 10px;
}
</style>