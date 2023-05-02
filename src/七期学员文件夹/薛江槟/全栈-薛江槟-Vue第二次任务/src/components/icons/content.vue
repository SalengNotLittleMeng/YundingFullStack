//主表格内容组件

<template>
    <div class="top">
        您当前选中的书是{{ currentName}}
    <br/>
        总价格为{{formatPrice(totalPrice) }}
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
            <tr v-for="(book,index) in books"
            :class="{change:index==currentIndex}" @click="int(index)">
                <td>{{ index+1}}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.price }}</td>
                <td>
                    <button @click="decrement(index)" 
                   >-</button>
                    {{ book.number }}
                    <button @click="increment(index)">+</button>
                </td>
                <td>
                    <button @click="remove(index)">移除</button>
                </td>

            </tr>
            <tr :class="{has:ishas}">
                <td>{{ this.books.length+1 }}</td>
                <td><input type="text" v-model="newName"> </td>
                <td><input type="text" v-model="newPrice"></td>
                <td> <button @click="decrement(this.books.length + 1)" 
                       >-</button>
                        {{ newNumber }}
                        <button @click="increment(this.books.length + 1)">+</button>
                    </td>
                <td><button @click="remove(this.books.length+1)">移除</button></td>
            </tr>

        </tbody>
    </table>

     <div class="tail">
            <button v-if="changed" @click="addBooks">添加书籍</button>
            <div v-else>
            <button @click="define()">确认</button>
            <button @click="noaddBooks">取消</button>
            </div>
    </div>
</template>


<script>
export default {
    props: ['books'],
    data () {
        return {
            currentIndex: -1,
            currentName: "",
            newNumber: 0,
            newName:"《》",
            newPrice: "",
            changed: true,
            ishas:true
        }
    },
    methods: {
        increment(index) {
            this.books[index].number++
        },
        decrement(index) {
            if (this.books[index].number!=0) {
                this.books[index].number--
            }
        },
       int(index) {
           this.currentIndex = index
            this.currentName = this.books[index].name
        },
        remove(index) {
            this.books.splice(index,1)
        },
        formatPrice(price) {
            return "￥"+price
        },
        define() {
            //  this.books[this.books.length].id = this.books.length + 1
            var newObject = {
                name:this.newName,
                    price:this.newPrice,
                number:0
            }
            this.books.push(newObject)
            
             this.changed = !this.changed
            this.ishas = true
           
        },
        addBooks() {
            this.changed = !this.changed,
            this.ishas=false
        },
        noaddBooks() {
            this.changed=!this.changed
            this.ishas=true
        }
       
    },
    computed: {
        totalPrice() {
            return this.books.reduce((preValue,item) => {
                return preValue+item.number*item.price
            },0)
        }
    },
   
    
        
    }


</script>
<style scoped >
    th,td{
            border: 1px solid #aaa;
            padding: 26px 36px;
            text-align: center;

    }
     table{
        border-collapse: collapse;
    }
    .top{
        font-size:30px
    }
    .change{
        background-color: skyblue;
    }
    .has{
        display: none;
        
    }
    input{
        width: 125px;
         font-size:20px;
         padding-left:50px;
    }
    .tail{
        margin-top: 20px;
        margin-left: 20px;
        
    }
   
</style>