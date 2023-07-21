  <template>
    <div>
     <h1>你的选择是:{{ a }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'choose',
    props:["a"],
    data:function(){
    return{

    }
  }
  
  }
  </script>
  
  <style scoped>
  
  </style>