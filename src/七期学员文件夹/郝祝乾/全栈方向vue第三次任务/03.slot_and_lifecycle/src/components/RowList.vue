<template>
 <div class="row-list">
  <div class="list"><slot>横向列表</slot></div>
 </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.row-list{
  padding: 2px;
  margin: 2px;
}
.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
