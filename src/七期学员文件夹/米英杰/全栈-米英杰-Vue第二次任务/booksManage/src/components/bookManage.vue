<template>
    <tr @click="$emit('select')">
        <td>{{ order }}</td>
        <td class="name">{{ name }}</td>
        <td class="price">{{ price }}</td>
        <td>
            <button @click="$emit('decrement')" :disabled="count <= 1">-</button>
            {{ count }}
            <button @click="$emit('increment')">+</button>
        </td>
        <td>
            <button @click="$emit('remove-book')">移除</button>
        </td>
    </tr>
</template>
<script>
export default {
    props: ['order', 'name', 'price', 'count'],
    emit:['select','remove-book', 'decrement', 'increment']
    }
</script>
<style>
    td{
        border: solid 1px black;
        padding: 10px 20px;
    }

    .name{
        width: 200px;
    }

    .price{
        width: 100px;
    }
</style>