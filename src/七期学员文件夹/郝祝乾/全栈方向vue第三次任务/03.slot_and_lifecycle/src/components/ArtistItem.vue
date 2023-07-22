<template>
  <div class="artist">
    <img :src="imgUrl" :alt="altUrl">
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
props:{
  imgUrl:{
    type:String,
    default:'https://blog.reginvolver.cn/wp-content/uploads/2022/07/QQ图片20220430192258-2.png',
  },
  altUrl:{
    type:String,
    default:'https://blog.reginvolver.cn/wp-content/uploads/2022/07/QQ图片20220430192258-2.png',
  },
  name:{
    type:String,
    default:"Good Money",
  }
}
}
</script>

<style scoped>
img {
  width: 55px;
  height: 48px;
}
.name{
  text-align: center;
  font-size: 15px;
}
</style>