<template>
    <div class="showing-lab" id="showing-lab">
        <span>总价：{{ Price(subprice) }}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>当前选中的书籍：{{ booK }}</span>
  </div>
    
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>书名</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in books"  @click="choose(index)">
                <td  >{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><button @click="sub(index)">-</button> {{ item.count }} <button @click="add(index)">+</button></td>
                <td><button @click="remove(index)">移除</button></td>
            </tr>
            <tr v-if="IFSHOWING()">
                <td>{{ this.books.length+1 }}</td>
                <td><input type="text" v-model="newbook.name"></td>
                <td><input type="text" v-model="newbook.price"></td>
                <td><input type="text" v-model="newbook.count"></td>
                <td><button @click="sub(this.books.length+1)">移除</button></td>
            </tr>
          </tbody>
        </table>
<div class="Add">
    <button @click="addbook()">{{ cancel }}</button>
    <div v-if="IFSHOWING()">
    <button @click="yes()">确认</button>
    <button @click="no()">取消</button>
    </div>
</div>
    
</template>

<script>
import { remove } from '@vue/shared';

    export default{
     props:["books"],
     data(){
        return{
            show:false,
            booK:'',
            cancel: '添加',
            newbook:{
                name:'',
                price:0,
                count:"0",
            }
        }
        },

     methods:{
        sub(index){
            this.books[index].count--
        },
        add(index){
            this.books[index].count++
        },
        remove(index){
            this.books.splice(index,1)
        },
        Price(rice){
            return "￥"+rice
        },
        addbook(){
            this.show =!this.show
            
            
        },
        no(){
            this.show =!this.show
        },
        IFSHOWING(){
            if(this.show == false){
                return false
            }else{
                return true
            }
        },
        yes(){
            let newbook = {
                name: this.newbook.name,
                price:this.newbook.price,
                count:this.newbook.count,
            }
            this.books.push(newbook);
            
        },
        choose(index){
            this.booK = this.books[index].name 
            console.log('111',this.books[index].name)
        }
       
        },
     computed:{
        subprice(){
            return this.books.reduce((index,item)=>{
                return index+item.count*item.price
            },0)
        }
        }
   
    
    }
</script>


<style>
    table{
        border-collapse: collapse;
    }
    th,td{
        border: .2px solid red;
        padding: 6px 16px;
    }
    thead{
        background-color: whitesmoke;
    }
    .showing-lab{
        font-size: 18px;
    }
</style>