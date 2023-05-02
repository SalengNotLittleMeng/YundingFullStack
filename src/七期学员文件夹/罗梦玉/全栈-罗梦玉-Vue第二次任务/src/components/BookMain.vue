<template>
    <h3>总价:¥{{ totalPrice }}</h3>
    <h3>当前选中的书籍:{{ checkedBook }}</h3>

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
            <tr v-for="(book,index) in book" :key="book.id" @click="check(index)" :class="{active:index===currentIndex}">
                <td>{{ index + 1 }}</td>
                <td>{{ book.name }}</td>
                <td>¥{{ book.price }}</td>
                <td>
                    <button @click="decline(index)">-</button>
                    {{ book.number }}
                    <button @click="increase(index)">+</button>
                </td>
                <td><button @click.stop="remove(index)">移除</button></td>
            </tr>
            <tr :class="{add:isAdd}">
                <td>{{ book.length + 1 }}</td>
                <td><input type="text" v-model="newName"></td>
                <td><input type="number" v-model="newPrice"></td>
                <td>
                    <button @click="decrease">-</button>
                    {{ counter }}
                    <button @click="Add">+</button>
                </td>
                <td><button>移除</button></td>
            </tr>
        </tbody>
    </table>

    <div>
        <template v-if="addBook">
            <button @click="addbook">添加书籍</button>
        </template>
        <template v-else>
            <button @click="sure">确定</button>
            <button @click="notsure">取消</button>
        </template>
    </div>
</template>

<script>
export default{
    props: ['books'],
    data:function() {
        return {
            book: this.books,
            isAdd: true,
            addBook: true,
            checkedBook: "",
            currentIndex:-1,
            newName: "",
            newPrice: "",
            counter:1
        }
    },
    methods: {
        increase(index){
            this.book[index].number++
        },
        decline(index) {
            if (this.book[index].number >= 1) {
                this.book[index].number--
            }
        },
        remove(index) {
            // alert(1)
            console.log(index, this.book.length)
            this.book.splice(index, 1)

        },
        addbook:function() {
            this.addBook = false
            this.isAdd = false
        },
        sure() {
            const newBooks = {
                name: "《" + this.newName + "》" ,
                price: this.newPrice,
                number: this.counter
            }
            if (this.newName == "") {
                alert("书名不能为空！")
            }
            else {
                if (this.newPrice <= 0) {
                    alert("价格应当是正数")
                }
                else {
                    this.book.push(newBooks)
                    this.addBook = true
                    this.isAdd = true
                    this.newName = ""
                    this.newPrice = ""
                    this.counter = 1
                }
            }
        },
        notsure() {
            this.addBook = true
            this.isAdd = true
        },
        check(index) {
            // alert(111)
            this.checkedBook = this.book[index].name,
            this.currentIndex = index
            
        },
        decrease(){
            if (this.counter >= 1) {
                this.counter--
            }
        },
        Add() {
            this.counter++
        }
    },
    computed: {
        totalPrice() {
            let price = 0
            for (const item of this.book) {
                price += item.price * item.number
            }
            return price
        }
    },
}

</script>

<style scoped>
    th,td{
            border: 1px solid #000;
            padding: 9px 16px;
            text-align: center;
    }

    thead {
        background-color: #ededed;
    }

    table {
        border-collapse: collapse;
    }
    .add {
        display: none;
    }
    .active{
        background-color: #fda602;
    }
</style>