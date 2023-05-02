<template>
    <tr>
        <td>{{ bookindex }}</td>
        <td>
            <input type="text" style="width: 100px; margin: 0 auto;" @keyup="$emit('inputname', $event.target.value)">
        </td>
        <td>
            <input type="number" style="width: 40px; margin: 0 auto;" v-model="tempprice">
        </td>
        <td>
            <button :disabled="tempnumber <= 1" @click="itemdecrease">-</button>
            {{ tempnumber }}
            <button @click="itemincrease">+</button>
        </td>
        <td>
            <button @click="move">移除</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ["bookindex"],
    emits:["inputnumber","inputname","inputprice","move"],
    data() {
        return {
            tempnumber: 1,
            tempprice:0
        }
    },
    watch: {
        tempnumber: function (newVal) {
            this.$emit("inputnumber", newVal);
        },
        tempprice: function (newVal) {
            this.$emit("inputprice", newVal);
        }
    },
    methods: {
        itemincrease(){
            this.tempnumber++;
        },
        itemdecrease() {
            this.tempnumber--;
        },
        inputname(name1) {
            this.$emit("inputname",name1);
        },
        move() {
            this.$emit("move")
        }
    }
}
</script>

<style>

</style>