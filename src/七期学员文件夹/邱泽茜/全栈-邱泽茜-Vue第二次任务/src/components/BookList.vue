<template>
    <tr v-for="(item, index) in books" 
        :class="{active: index === currentIndex}" 
        :key="item"
        >
        <td @click="itemClick(index)" >{{ index + 1 }}</td>
        <td @click="itemClick(index)" >
            <div v-if="item.name != ''">{{ addShuminghao(item.name) }}</div>
        </td> 
        <td @click="itemClick(index)">
            <div v-if="item.price != ''">{{ addRnmingbi(item.price) }}</div>
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
        emits: ["add","sub","btnClick","isCurrentBook"],
        props: {
            books: {
                type: Array,
                required:true,
                default: () => {}
            },
            currentBook: {
                type: String,
                required:true,
                default: ""
            }
        },
        data() {
            return {
                currentIndex: -1
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
                this.$emit("isCurrentBook", index)
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
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        .active {
            background-color: orange;
        }
    </style>