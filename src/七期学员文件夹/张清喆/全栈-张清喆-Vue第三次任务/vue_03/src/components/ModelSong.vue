<template>
  <div class="bigbox">
    <slot name="title"></slot>
    <hr>
    <slot name="body"></slot>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ModelSong',
  props: {
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bigbox{
  /* display: flex; */
}
</style>
