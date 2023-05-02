<template>
    <tr v-for="(item, index) in newBook" :key="item">
        <td @click="itemClick(index)" >{{ newIndex + 1 }}</td>
        <td @click="itemClick(index)" >
            <input type="text" :value="item.name" @input="$emit('addName',$event.target.value)">
        </td> 
        <td @click="itemClick(index)" >
            <input type="text" :value="item.price" @input="$emit('addPrice',$event.target.value)">
        </td>
        <td>
            <button @click="sub(index)" :disabled="item.count <= 1">-</button>
            {{ item.count }}
            <button @click="add(index)">+</button>
        </td>
        <td><button @click="btnClick(index)">移除</button></td>
    </tr>
</template>

<script>
    export default {
        emits: ["add","sub","btnClick","addName","addPrice"],
        props: {
            newBook: {
                type: Array,
                required:true,
                default: () => {}
            },
            books: {
                type: Array,
                required:true,
                default: () => {}
            },
            newIndex: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                currentIndex: -1,
            }
        },
        methods: {
            add(index) {
                this.$emit("addCounter", index)
            },
            sub(index) {
                this.$emit("subCounter", index)
            },
            btnClick(index) {
                this.$emit("btnClick",index)
            },
            itemClick(index) {
                this.currentIndex = index
            },
            addShuminghao(name) {
                return "《" + name + "》"
            },
            addRnmingbi(price) {
                return "￥" + price
            }
        }
    }
</script>

<style>

</style>