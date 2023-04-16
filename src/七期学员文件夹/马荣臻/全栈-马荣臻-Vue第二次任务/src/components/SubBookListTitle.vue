<template>
    <thead id="app">
        <tr>
            <th v-for="item in head" :key="item">{{ item }}</th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: "sub-book-list-title",
    data() {
        return {
            head: ["序号", "书籍名称", "出版日期", "价格", "购买数量", "操作"]
        }
    }
};
</script>

<style scoped>
@import "@/styles/booklist.scss";
</style>