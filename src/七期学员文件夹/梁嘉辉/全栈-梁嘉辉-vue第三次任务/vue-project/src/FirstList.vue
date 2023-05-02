<template>
  <div class="listTop">
    <!-- <slot :name="name" name="names"></slot>
    <slot :coverImgUrl="coverImgUrl" name="coverImg"></slot>
    <slot :description="description" name="descrip"></slot> -->
    <slot name="names"></slot>
    <slot name="coverImg"></slot>
    <slot name="descrip"></slot>
    <hr>
  </div>
</template>
<script>
  export default{
    // props:['coverImgUrl','name','description'],
  }
</script>
<style scoped>
  .listTop{
    width: 350px;
    position: relative;
  }
  hr{
    position: relative;
    top: 140px;
    border-top: 3px solid;
  }
</style>