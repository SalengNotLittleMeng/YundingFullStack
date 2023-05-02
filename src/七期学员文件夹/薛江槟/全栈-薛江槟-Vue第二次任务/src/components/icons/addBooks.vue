//实现自主添加书籍的功能组件
<template>
    
    <div class="tail">
        <button v-if="change" @click="addBooks">添加书籍</button>
        <div v-else>
        <button @click="define()">确认</button>
        <button @click="addBooks">取消</button>
        </div>
    </div>
</template>
<script >
export default {
    props: ["books"],
    emits:["addBook","isdefine"],
    data () {
        return {
            change: true,
            isadd: true,
            isdefine:false
        }
    },
    methods: {
        addBooks() {    
            this.change = !this.change,
            this.isadd=!this.isadd
            this.$emit("addBook",this.isadd)
        },
        define() {
            
            this.isdefine = true;
            this.$emit("isdefine", this.isdefine)
            this.isadd = !this.isadd
            this.change =!this.change
               
            this.$emit("addBook", this.isadd)

            
       }
       
    },
    

}

</script>
<style scoped >
    .tail{
        margin-top: 20px;
        margin-left: 20px;
        
    }
    .hide{
        display: none
    }
</style>