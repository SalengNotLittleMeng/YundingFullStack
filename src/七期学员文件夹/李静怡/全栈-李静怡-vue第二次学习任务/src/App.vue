<!-- 完成约70%

未实现功能：
  1.计算总价
  2.添加书籍

补充功能：
  1.可显示上次删除书籍

  补充但未实现功能：
  1.撤销删除（猜测原因为对象则返回值是proxy故无法将删除的对象直接保存在新对象中，待学习）

  未掌握知识点：
  1.this用法，不知道何时该用
  2.$emit用法，暂未熟练掌握
  3.经常出现数据未定义情况，尤其在跨组件通信时
  4.无法保存对象类型数据（见上补充但未实现功能）
  5.可扩展proxy用法 -->





<template>
    <div>
      <h4 @itemPrice="changePrice">总价：{{ formatPrice(totalprice) }}</h4>
      <pre>当前选中书籍：{{ showItemName }}   上次删除书籍：{{ showDeleteName }}</pre>

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
          <tr v-for="(item,index) in books"
          @click="showItem(index)"
          :class="{active: index == currentIndex}">
            <ItemLine :index="index" :id="item.id" :name="item.name" :price="formatPrice(item.price)" :count="item.count" />
            <td><button @click="remove(index)">移除</button></td>
          </tr>
          <tr v-if="addflag">
            <td>{{ this.books.length+1 }}</td>
            <AddItem />
            <td><button @click="remove(index)">移除</button></td>
          </tr>
        </tbody>
      </table>

      <!-- <button @click="restoreDel">撤销删除</button> -->
      <button @click="addTurnTrue">添加</button>
      <button @click="addTurnFalse">确认</button>
      <button>取消</button>
    </div>
</template>

<script>
import ItemLine from './components/ItemLine.vue';
import AddItem from './components/AddItem.vue'

export default {
    data() {
        return {
          books:[
            {
              id:1,
              name:"《JavaScript高级程序设计》",
              price:126,
              count:1,
            },
            {
              id:2,
              name:"《你不知道的JS(上卷）》",
              price:78,
              count:1,
            },
            {
              id:3,
              name:"《你不知道的JS(中卷）》",
              price:76,
              count:1,
            },
            {
              id:4,
              name:"《你不知道的JS(下卷）》",
              price:64,
              count:1,
            }
          ],
          totalprice:344,
          itemPrice:0,
          currentIndex:-1,
          showItemName:"暂无",
          showDeleteName:"暂无",
          addflag:false,
          newbook:{
            name:"",
            price:0,
            count:1
          }
          // 尝试恢复删除未成功，猜测原因为对象则返回值是proxy故无法将删除的对象直接保存在新对象中，待学习
          // delItem:{
          //   id:0,
          //   name:"暂无",
          //   price:0,
          //   count:1
          // },
          
        };
    },
    methods: {
        formatPrice(price) {
            return "￥" + price;
        },
        changePrice(){
          totalprice+=itemPrice
        },
        remove(index){
          // this.delItem=this.books[index]
          this.books.splice(index,1)
          this.showDeleteName=this.books[index].name
        },
        showItem(index){
          this.currentIndex=index
          this.showItemName=this.books[index].name
        },
        addTurnTrue(){
          this.addflag=true
        },
        addTurnFalse(){
          this.addflag=false
        }
        // restoreDel(delItem){
        //   console.log(delItem)
        //   this.books.push(delItem)
        // }
    },
    components: { ItemLine ,AddItem}
}
</script>

<style >
table {
            border-collapse: collapse;
            text-align: center;
        }
        th {
            background-color: #f5f5f5;
        }
        th,td {
            border:1px solid #aaa;
            padding: 8px 16px;
        }
        .active {
            background-color:antiquewhite;
        }
        pre {
          font-size: 1.5em;
        }
</style>