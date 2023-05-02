<template>
    <tr @click="itemClick">
        <td>{{ bookIndex }}</td>
        <td>{{ bookName }}</td>
        <td>{{ price }}</td>
        <td>
            <button @click="itemdecrease" :disabled="bookNumber <= 1">-</button>
            {{ bookNumber }}
            <button @click="itemincrease">+</button>
        </td>
        <td>
            <button @click="removebook">移除</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['bookIndex', 'bookName', 'price', 'bookNumber'],
    emits: ['changeback',"itemincrease","itemdecrease","removebook"],
    methods: {
        itemClick() {
            this.$emit("changeback");
        },
        itemincrease() {
            this.$emit("itemincrease");
        },
        itemdecrease() {
            this.$emit("itemdecrease");
        },
        removebook() {
            this.$emit("removebook");
        }
    }
}
</script>

<style>
td {
    border: solid 1px black;
    text-align: center;
    font-size: 10px;
}
</style>