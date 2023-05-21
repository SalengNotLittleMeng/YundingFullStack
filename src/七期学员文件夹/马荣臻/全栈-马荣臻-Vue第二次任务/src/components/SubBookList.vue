<template>
    <tr id="app">
        <td>{{ bookData.id }}</td>
        <td v-html="bookData.name"></td>
        <td v-html="bookData.date"></td>
        <td v-html="bookData.price"></td>
        <!-- <input v-model="newObj.name" @keyup="handleInput" /> -->
        <td>
            <button :class="countJudge(bookData)" @click="reduceCount(bookData)">
                -
            </button>
            <p>{{ bookData.count }}</p>
            <button @click="addCount(bookData)">+</button>
        </td>
        <td>
            <button @click="remove()">移除</button>
        </td>
    </tr>
</template>

<script>
import bookDatas from "../../src/assets/data.js"
export default {
    name: "sub-book-list",
    props: {
        datas: {
            type: Object,
            default: bookDatas.books
        }
    },
    data() {
        return {
            bookData: this.datas,
            newObj: {
                name: '',
                date: '',
                price: 0,
            },
        }
    },
    computed: {
        handleInput() {
            console.log(this.newObj.name);
            this.$emit("keyEnter", this.newObj)
            return 0
        }
    },
    methods: {
        countJudge(item) {
            return item.count == 0 ? "disabled" : "button"
        },
        reduceCount(item) {
            if (item.count != 0) {
                item.count--
                this.$emit("reduceCount", this.bookData.id)
            }
        },
        addCount(item) {
            item.count++
            this.$emit("addCount", this.bookData.id + 1)
        },
        remove(e) {
            this.$emit("remove", e)
        }
    }
};
</script>

<style scoped>
@import "@/styles/booklist.scss";
</style>