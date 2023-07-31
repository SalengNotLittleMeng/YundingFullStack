<template>
    <div>
        <h4>展示列表</h4>
        <ul>
            <li 
                v-for="(item,index) in showList"
                :key="index"
                @click="showToChoice(item,index)">
                {{ item }}
            </li>
        </ul>
        <input placeholder="请输入事项" v-model="inputValue" @keyup.enter="inputPush()">
    </div>
</template>

<script setup>
    import {ref,defineExpose} from 'vue'
    import {useRouter} from 'vue-router'

    var showItem="hh"
    const router=useRouter()
    const inputValue = ref("")
    const showList=ref([
        "吃饭",
        "睡觉",
        "打豆豆"
    ])

    //点击切换展示
    function showToChoice(item,index) {
        // 此处本想通过暴露变量来将变量导入到另一组件，但未成功，最终通过query实现
        showItem=item
        console.log(item,showItem)
        router.push({
            path:"/home/rank",
            query:showItem
        })
    }
    // 输入事件
    function inputPush(){
        showList.value.push(inputValue.value)
    }

    // defineExpose({
    //     showItem
    // })
</script>

<style scoped>
</style>
