<script>
    export default{
        data:function(){
            return{
                text:'',
                WordList:["hh","hh","hh"],
            }
        },
        methods:{
            Add(){
                if(this.text!=''){
                    this.WordList.push(this.text)
                }else{
                    alert("请输入单词")
                }
            },
            Delet(){
                this.WordList.pop()
            },
            Warning(){
                if(this.WordList.length>=5){
                    return true
                }else{
                    return false
                }
            },
            choice(word){
                this.$router.push({
                    name:'Choice',
                    query:{
                        title:word
                    }
                })
            },
        }
    }
</script>
<template>
    <div class="father" id="app">
            <input type="text" v-model="text" placeholder="请输入单词" @keyup.enter="Add">
            <div class="wordSearch">你要输入的单词是：<p>{{text}}</p></div>
            <div class="Button">
                <button @click="Add">添加</button>
                <button @click="Delet">删除</button>
            </div>
            <div :class="{change:Warning()}" v-if="Warning()">别加了！ 单词太多了</div>
            <ul v-if = "this.WordList.length!=0" class="list">
                <li v-for="word in WordList" :class="{change:Warning()}" @click="choice(word)">
                    {{word}}
                </li>
            </ul>
        </div>
</template>
<style>
</style>