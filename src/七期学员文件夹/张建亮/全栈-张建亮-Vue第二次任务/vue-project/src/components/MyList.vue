<template>
    <table class="list">
        <tr>
            <th>序号</th>
            <th>书名</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
        </tr>
        <MyItem @addCount="addCount" @reduceCount="reduceCount" v-for="(obj, index) in list" :key=obj.id :obj="obj"
            :class="{ 'activeCss': selected == obj.id }" @click="active(item, obj.id)" @remove="remove"
            :index="index + 1" />
        <tr v-show="!addShow.addShow">
            <td></td>
            <td><input type="text" v-model="bookName"></td>
            <td><input type="number" v-model="value" oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
                    style="width: 30px;" /></td>
            <td><button @click="addNew"><i class="iconfont icon-zengjia"></i></button>{{ count }}<button
                    @click="reduceNew"><i class="iconfont icon-jianshao"></i></button></td>
            <td></td>
        </tr>
    </table>
</template>

<script>
import { nanoid } from 'nanoid'
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    components: { MyItem },
    props: ['list', 'addShow'],
    data() {
        return {
            bookName: '',
            value: '',
            count: 1,
            selected: '0'
        }
    },
    updated() {
        //包装图书信息
        const bookInf = { id: nanoid(), bookName: this.bookName, value: this.value, count: this.count, operation: "移除" }
        //判断是否写入书名，trim（）方法去除空格
        if (this.addShow.add === 'true' && !this.bookName.trim()) {
            alert("请输入书名")
        }
        //判断价格是否合法
        else {
            if (this.addShow.add === 'true' && !this.value > 0) {
                alert("价格需大于0元")
            }
        }
        //判断输入信息合法
        if (this.addShow.add === 'true' && this.value > 0 && this.bookName.trim()) {
            //$emit自定义事件,通知App添加数组
            this.$emit('bookInf', bookInf)
        }
    },
    methods: {
        //增加新书数量
        addNew() {
            this.count = this.count + 1
        },
        //减少新书数量
        reduceNew() {
            if (this.count) {
                this.count = this.count - 1
            }
        },
        //数量增加
        addCount(id) {
            this.$emit('addCount', id)
        },
        //数量减少
        reduceCount(id) {
            this.$emit('reduceCount', id)
        },
        //点击选中
        active(item, id) {
            this.selected = id
            this.$emit('selected', id)
        },
        //移除
        remove(id) {
            this.$emit('remove', id)
        }
    }
}

</script>

<style scoped>
.activeCss {
    background-color: grey;
}

button {
    background-color: transparent;
    border: none;
}
</style>
