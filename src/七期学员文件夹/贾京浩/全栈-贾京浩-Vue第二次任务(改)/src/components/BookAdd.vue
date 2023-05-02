<template>
    <tr v-show="!isShow">
        <td>{{ serialNumber + 1 }}</td>
        <td>
            <input type="text" v-model="newList.name">
        </td>
        <td>
            <input type="number" v-model="newList.price">
        </td>
        <td>
            <button :disabled="newList.counter <= 1" @click="newReduce">-</button>
                {{ newList.counter }}
            <button @click="newAdd">+</button>
        </td>
        <td>
            <button>移除</button>
        </td>
    </tr>
    <div v-show="isShow">
        <button @click="changeShow">添加</button>
    </div>
    <div v-show="!isShow" @click="changeShow" id="btn">
        <button @click="addInfo(this.newList)">确认</button>
        <button>取消</button>
    </div>
</template>


<script>
export default {
    props: ["serialNumber"],
    emits: ["addInfo"],
    data() {
        return {
            isShow: true,
            newList: {
                name: "",
                price: 0,
                counter: 1,
            }
        }
    },
    methods: {
        newReduce() {
            this.newList.counter--
        },
        newAdd() {
            this.newList.counter++
        },
        changeShow() {
            this.isShow = !this.isShow
        },
        addInfo(result) {
            if (this.newList.name == '') {
                alert("书名不能为空");
            }
            else if (this.newList.price < 1) {
                alert("价格必须是正数");
            }
            else {
                this.$emit("addInfo",result)
                // this.list.push(this.newList)
                this.newList = {
                    name: "",
                    price: 0,
                    counter: 1,
                }
            }
        }
    }
}
</script>


<style>
#btn {
    display: flex;
}

#btn button {
    width: 45px;
}

tr {
    border: 1px solid black;
    border-top: 0;
    border-right: 0;
    height: 50px;
}

td {
    border-right: 1px solid black;
}
</style>