<template>
  <td>{{ index + 1 }}</td>
  <td @click="selectClick">{{ signName(name) }}</td>
  <td>{{ signPrice(price) }}</td>
  <td>
    <button :disabled="counter <= 1" @click="reduceClick">-</button>
    {{ counter }}
    <button @click="addClick">+</button>
  </td>
  <td>
    <button @click="deleteClick">移除</button>
  </td>
</template>

<script>
export default {
  props: ["price", "name", "index", "counter"],
  emits: ["reduce","add","select","delete"],
  methods: {
    reduceClick() {
      this.$emit("reduce")
    },
    addClick() {
      this.$emit("add")
    },
    signPrice(price) {
      return "￥" + price
    },
    signName(name) {
      return "《" + name + "》"
    },
    selectClick() {
      this.$emit("select")
    },
    deleteClick() {
      this.$emit("delete")
    },
  }
}
</script>

<style scoped>
td {
  border-right: 1px solid black;
}
</style>
