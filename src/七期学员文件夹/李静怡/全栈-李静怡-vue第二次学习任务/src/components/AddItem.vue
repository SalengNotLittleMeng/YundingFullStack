<template>
    
        <td><input type="text" v-model="newbook.name"></td>
        <td><input type="text" v-model="newbook.price"></td>
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
        }
    }
}
</script>

<style scoped>
</style>