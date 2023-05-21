<template>
  <tr @click="chosen(this.index)" >
    <th>{{ this.id }}</th>
    <th>{{ this.name }}</th>
    <th>{{price}}</th>
    <th>
      <button :disabled="this.count<=0" @click="subBook(this.id)">-</button>
      {{ this.count }}
      <button @click="addBook(this.id)">+</button>
    </th>
    <th>
      <button @click="deleBook(this.index)">移除</button>
    </th>
  </tr>
</template>

<script>
export default{
  data(){
    return{
      book : this
    }
  },
  props:["id","name","price","count","index","status"],
  methods : {
    addBook(num){
      this.$emit("add",num) 
    },
    subBook(nim){
      //alert(99)
      this.$emit("sub",nim)
    },
    deleBook(nnm){
      this.$emit("dele",nnm)
    },
    chosen(id){
      //alert(id)
      this.$emit("cho",id)
      //this.style.background-color = red
  }
}
}
</script>

<style scoped>
 th{
  border:1px solid #aaa;
  padding:10px 50px;
  background-color: #fff;
}

</style>