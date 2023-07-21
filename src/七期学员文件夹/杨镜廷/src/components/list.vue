<template>
  <div v-for="item in items">
    <router-link to="/home/choice/{{ item.text }}"><!--留个小疑问，不太懂我研究研究-->
        <li>{{ item.text }}</li>
    </router-link>
  </div>
  <div>
    <input type="text" v-model="func"/>
    <button @click="hanshu">输入</button>
  </div>
</template>


<script>
export default {
        func:'',
        data() {
            return {
                name: '',
                items:[{text:"唱"},{text:"跳"},{text:"rap"}]
            }
        },
        methods: {
          hanshu(){
            this.items.push({text:this.func})
          }
        }
    }
</script>




<style scoped>
</style>