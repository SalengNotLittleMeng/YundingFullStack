<template>
<tr >
        <td>{{ order }}</td>
        <td>{{ name }}</td>
        <td>￥{{ price }}</td>
        <td>
          <button :disabled="count < 1" @click="$emit('decrement')">-</button>
          {{ count }}
          <button @click="$emit('increment')">+</button>
        </td>
        <td>
          <button @click="$emit('removebook')">移除</button>
        </td>
      </tr>
</template>
<script>
export default {
  props: ['order', 'name', 'price', 'count'],
  emit:['removebook','decrement','increment']
}
</script>
<style>
  th,
  td {
    border: 1px solid #000;
    padding: 8px 16px;
  }

</style>