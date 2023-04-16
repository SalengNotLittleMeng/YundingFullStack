<template>
  <td>{{this.index+1}}</td>
  <td  @click="changecolor(index)" >
    {{formatbook(this.name)}}
  </td>
  <td>{{formatPrice(this.price)}}</td>
  <td>
    <button @click="decrement(this.index)" :disabled="this.count<=0">
      -
    </button>
    {{this.count}}
    <button @click="increment(this.index)">+</button>
  </td>
  <td>
    <button @click="removebook(this.index)">移除</button>
  </td>
</template>


<script>

export default {
emits: ['decre','incre','remove','chang'],
props:["index","name","price","count"],
  methods: {
    formatPrice(price) {
      return '￥' + price
    },
    formatbook(name) {
      return '《' + name +"》"
    },
    decrement(index) {
      this.$emit("decre",index)
    },
    increment(index) {
      this.$emit("incre",index)
    },
    removebook(index) {
      this.$emit("remove",index)
    },
    changecolor(index){
      this.$emit("chang",index)
    },
  },
}
</script>
