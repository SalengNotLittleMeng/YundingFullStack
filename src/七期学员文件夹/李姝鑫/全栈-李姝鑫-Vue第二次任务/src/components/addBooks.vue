<template>
    <tr >
                <td>{{ id }}</td>
                <td><input type="text" id="addName"  @input="$emit('update:name',$event.target.value)"
                ></td>
                <td><input type="number" id="addPrice"  @input="$emit('update:price', $event.target.value)"></td>
                <td>
                <button :disabled="count < 1" @click="$emit('countdre')">-</button>
                {{ count }}
                <button @click="$emit('countin')">+</button>
            </td>
            <td>
                <button disabled>移除</button>
            </td>
    </tr>
</template>
<script>
export default {
    props: ['count', 'id','change'],
    emit: ['countin', 'countdre']
}
</script>
<style scoped>
#addPrice{
    width: 40px;
}
</style>