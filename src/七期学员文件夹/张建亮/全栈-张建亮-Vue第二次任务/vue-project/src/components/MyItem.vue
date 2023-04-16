<template>
    <tr>
        <td>{{ index }}</td>
        <td>《{{ obj.bookName }}》</td>
        <td>￥{{ obj.value }}</td>
        <td><button @click="addCount"><i class="iconfont icon-zengjia"></i></button>{{ obj.count }}<button
                @click="reduceCount"><i class="iconfont icon-jianshao"></i></button></td>
        <td><button @click="remove" style="
                background-color: grey;
                opacity: 0.8;
                border: solid;
            ">{{ obj.operation }}</button></td>
    </tr>
</template>

<script>
import { remove } from '@vue/shared'

export default {
    name: 'Item',
    props: ['obj', 'index'],
    methods: {
        //数量增加
        addCount() {
            this.$emit('addCount', this.obj.id)
        },
        //数量减少
        reduceCount() {
            if (this.obj.count) {
                this.$emit('reduceCount', this.obj.id)
            }
        },
        //移除
        remove() {
            this.$emit('remove', this.obj.id)
        }
    }


}
</script>

<style scoped>
button {
    background-color: transparent;
    border: none;
}
</style>
