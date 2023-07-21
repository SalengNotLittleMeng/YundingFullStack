<template>
  <div>
    <h3>我是home组件</h3>
    <router-link to="/list" >展示列表</router-link>   |
    <router-link to="/choose">你的选择是</router-link>
    <router-view :items="items"  @add="add" :a="a" @change="change"></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data:function(){
    return {
      a:"",
      items:[
        {
          nam:"111",
          num:0,
        },
        {
          nam:"222",
          num:1,
        },
        {
          nam:"333",
          num:2,
        }
      ],
    }
  },
  methods:{
    add(name){
      console.log(name);
      var obj={
        nam:name,
        num:this.items.length
      }
      this.items.push(obj)
    },
    change(ab){
      this.a=this.items[ab].nam;
      this.$router.push('/choose');
    }
  }
}
</script>

<style scoped>

</style>
