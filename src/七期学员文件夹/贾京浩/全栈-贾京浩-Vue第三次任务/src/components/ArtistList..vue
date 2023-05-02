<template>
    <div id="artistlist">
        <slot name="picture"></slot>
        <p><slot name="name"></slot></p>
    </div>
</template>

<script>
</script>

<style scoped>
p {
  display: flex;
  justify-content: center;
}
</style>