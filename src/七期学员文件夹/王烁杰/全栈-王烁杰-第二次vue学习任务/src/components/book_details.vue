<template>
    <tr>
        <td>{{ this.index + 1 }}</td>
        <td>
            <div v-if="this.bookName != ''">
                {{ this.bookName }}
            </div>
            <input type="text" v-else class="input_name" v-model="inputName" />

        </td>
        <td>
            <div v-if="this.price != ''">
                {{ allPrice }}
            </div>
            <input type="text" v-else class="input_price" v-model="inputPrice" @blur="price_edit(inputName, inputPrice)" />
        </td>
        <td>
            <button @click="del(this.index)" :disabled="copyCounter <= 0">-</button>
            {{ copyCounter }}
            <button @click="add(this.index)">+</button>
        </td>
        <td><button @click="move(this.index)">移除</button></td>
    </tr>
</template>

<script>
export default {
    $emit: ["move", "money", "moremsg",],

    props: ["index", "bookName", "counter", "price"],
    created() {
        this.allPrice = "￥" + this.price
    },
    data() {
        return {
            copyBookName: this.bookName,
            copyCounter: this.counter,
            copyPrice: this.price,
            allPrice: "",
            inputPrice: "",
            inputName: "",
        }
    },

    methods: {
        add(index) {
            this.copyCounter++
            this.allPrice = "￥" + this.copyCounter * this.copyPrice
            this.$emit("money", index, 1)
        },
        del(index) {
            this.copyCounter--
            this.allPrice = "￥" + this.copyCounter * this.copyPrice
            this.$emit("money", index, -1)
        },
        move(copyIndex) {
            this.$emit("move", copyIndex, this.copyCounter)
        },
        price_edit(newvalue1, newvalue2) {
            this.$emit("moremsg", newvalue1, newvalue2)
        },
    },
};
</script>

<style scoped>
.input_price {
    width: 30px;
}
</style>