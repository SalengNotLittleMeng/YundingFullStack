<template>
  <div class="song" >
    <div class="name">{{index}} - {{ name }}</div>
  </div>
</template>

<script>
export default {
props:{
  name:{
    type:String,
    default:"Good Money",
  },
  index:{
    type:Number,
    default:0,
  },
}
}
</script>

<style scoped>
.name{
  text-align: left;
  font-size: 20px;
}
</style>