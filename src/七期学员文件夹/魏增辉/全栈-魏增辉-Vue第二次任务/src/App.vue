<template>
  
  <div class="nothing">
    <Show-List v-bind:books="books" ></Show-List>
  </div>
</template>

<script>
import ShowList  from './components/BookList.vue';

export default {
   components:{
      ShowList
   },
   data(){
    return {
      books:[
        {
          name:"《线性代数》",
          price:"66",
          count:"0"
        },
        {
          name:"《线性代数》",
          price:"123",
          count:"0"
        },
        {
          name:"《线性代数》",
          price:"321",
          count:"0"
        },
      ]
    }
   }
}
</script>

<style>
  
</style>
