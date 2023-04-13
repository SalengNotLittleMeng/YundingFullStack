<template>
    <tr>
        <td>{{ order }}</td>
            <td class="name">
                <input 
                type="text"
                :value="name"
                @input="$emit('update:name',$event.target.value)"
                >
            </td>
            <td class="price"> 
                <input 
                type="number"
                :value="price"
                @input="$emit('update:price', $event.target.value)"
                class="priceInput" 
                >
            </td>
            <td>
                <button @click="$emit('decrement')" :disabled="count <= 1">-</button>
                {{ count }}
                <button @click="$emit('increment')">+</button>
            </td>
            <td>
                <button disabled>移除</button>
            </td>
    </tr>
</template>

<script>
export default {
    props: ['order', 'name', 'price', 'count'],
    emit: ['decrement', 'increment','update:name','update:price'],
}
</script>

<style>
    .name{
        width: 200px;
    }

    .price{
        width: 100px;
    }

    .priceInput{
        width: 50px;
    }

    td{
        border: solid 1px black;
        padding: 10px 20px;
    }
</style>