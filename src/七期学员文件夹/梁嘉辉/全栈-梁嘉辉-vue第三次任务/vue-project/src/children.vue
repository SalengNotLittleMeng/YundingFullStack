<template>
    <div class="singer">
      <template v-for="item in singers" :key="item">
        <div>
          <slot :item="item" name="picture"></slot>
          <slot :item="item" name="singer" ></slot>
        </div>
      </template>
    </div>
    <hr>
</template>
<script>
  export default{
    props:['singers'],
  }
</script>
<style scoped>
  .singer{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 100px;
  }
</style>