<!--  -->
<template>
<td>{{ this.index +1}}</td>
 <td>《{{ this.name }}》</td>
 <td>￥{{ this.price }}</td>
 <td>
    <button @click="minus(index)" :disabled="number <= 1">-</button> 
    {{ this.number }} 
    <button @click="add">+</button>
</td>
 <td>
    <button @click="remove">删除</button>
 </td>

</template>

<script>
export default {
    props: ["index", "name", "price", "number"],
    emits:["remove","add","minus"],
    data () {
        return {
            flag: 1
        };
    },
    methods: {
        minus: function (index) {
            this.$emit("minus", index)
        },
        add: function (index) {
            this.$emit("add", index)
        },
        remove: function (index) {
            this.$emit("remove", index)
        },
  }
}

</script>
<style>
</style>