<template>
    <div>
        <slot name="img"></slot>
        <p><slot name="name"></slot></p>
    </div>
</template>


<style scoped>

div {
    margin: 0 35px;
}

p {
    display: inline-block;
}

</style>