<template>
    <td>{{ this.index+1 }}</td>
    <td>{{ this.name }}</td>
    <td>{{ this.price }}</td>
    <td>
        <button @click="decrease" :disabled="this.newcount<=0">-</button>
        {{ newcount }}
        <button @click="increase">+</button>
    </td>
</template>

<script>
export default {
    data() {
        return{
            newcount: this.count,
            // 出现奇怪的报错，各种尝试后修正（xy: trap returned falsish for property 'count'     at Proxy.increase (ItemLine）
            // itemPrice:0
        }
    },
    props:["id","name","price","count","index"],
    methods:{
        
        decrease(){
            this.newcount--
            // itemPrice=this.price
            // console.log(itemPrice)
            // this.$emit("itemPrice",itemPrice)
            return true;
        },
        increase(){
            this.newcount++
            // itemPrice=-this.price
            // this.$emit("itemPrice",itemPrice)
            return true;
        },
        
        
    }
}
</script>

<style scoped>
</style>