<template>
    <div>
        <h2>总价为：{{ allPrice }} 当前选中的书籍为：{{ pitchbook }}</h2>
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
            <show-book v-for="(book, index) in books" :key="index" :bookIndex="index + 1" :bookName="getBookName(book.name)"
                :price="'￥' + book.price" :bookNumber="book.count" :class="{ active: index == tempIndex }"
                @changeback="changeTempIndex(index, book)" @itemincrease="increase(book)" @itemdecrease="decrease(book)"
                @removebook="removebook(index)">
            </show-book>
            <add-book v-if="foradd" :bookindex="books.length + 1" @inputname="inputname" @inputnumber="inputnumber"
                @inputprice="inputprice" @move="move"></add-book>
        </tbody>
        <div v-if="foradd">
            <button @click="yes">确认</button>
            <button @click="no">取消</button>
        </div>
        <button class="button" v-else @click="add">添加</button>
    </div>
</template>

<script>
import showBook from './componments/showBook.vue';
import addBook from './componments/addBook.vue'
export default {
    components: {
        showBook,
        addBook
    },
    data() {
        return {
            books: [
                {
                    name: "你不知道的JS（上卷）",
                    price: 54,
                    count: 2,
                },
                {
                    name: "你不知道的JS（中卷）",
                    price: 76,
                    count: 3,
                },
                {
                    name: "你不知道的JS（下卷）",
                    price: 64,
                    count: 1,
                },
            ],
            tempIndex: -1,
            pitchbook: "",
            foradd: 0,
            temp: {
                name: "",
                price: 0,
                count: 1,
            }
        }
    },
    methods: {
        getBookName(item) {
            return "《" + item + "》"
        },
        changeTempIndex(index, book) {
            this.tempIndex = index;
            this.pitchbook = book.name;
        },
        increase(book) {
            book.count++;
        },
        decrease(book) {
            book.count--;
        },
        removebook(index) {
            this.books.splice(index, 1)
        },
        inputname(name1) {
            this.temp.name = name1;
        },
        inputnumber(number) {
            this.temp.count = number;
        },
        inputprice(price) {
            this.temp.price = price;
        },
        add() {
            this.temp = {
                name: "",
                price: 0,
                count: 1,
            }
            this.foradd = 1
        },
        yes() {
            if (this.temp.name != "" && this.temp.price > 0 && this.temp.count > 0) {
                this.books.push(this.temp);
            }
            else if (this.temp.name == "") {
                alert("书籍名字不能为空");
            }
            else {
                alert("书籍价格应为正数")
            }
            this.foradd = 0;
        },
        no() {
            this.foradd = 0
        },
        move() {
            this.foradd = 0
        }
    },
    computed: {
        allPrice() {
            let all = 0;
            for (let index = 0; index < this.books.length; index++) {
                all += this.books[index].price * this.books[index].count;
            }
            return all;
        }
    }
}
</script>

<style>
th {
    border: solid 1px black;
    height: 30px;
    width: 150px;
}

.active {
    background-color: orange;
}

.button {
    margin-top: 20px;
}
</style>