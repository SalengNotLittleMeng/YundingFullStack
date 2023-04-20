<template>
    <tr>
        <td>{{ newIndex }}</td>
        <td>
            <input type="text" v-model="message.newName">
        </td>
        <td>
            <input type="number" v-model="message.newPrice" class="num">
        </td>
        <td>
            <button :disabled="message.newNumber < 1" @click="newDecrease">-</button>
            {{ message.newNumber }}
            <button @click="newIncrease">+</button>
        </td>
        <td>
            <button @click="newRemove">移除</button>
        </td>
    </tr>
</template>

<script>
    export default{
        props: ['newIndex'],
        emits:['nRem','mes'],
        data(){
            return{
                message:{
                    newName:'',
                    newPrice:0,
                    newNumber:1,
                },
            }
        },
        methods:{
            newDecrease(){
                this.newNumber--
            },
            newIncrease(){
                this.newNumber++
            },
            newRemove(){
                this.$emit('nRem')
            },
        },
        watch:{
            mes(message){
                this.$emit('mes',message)
            }
        }
    }
</script>

<style scoped>
    td{
    border: 1px solid #aaa;
    padding: 8px 10px;
    }
    .num{
        width:40px
    }
</style>