<template>
    <div>
        <div class="header">
            <div class="text">
                <h1><slot name="name"></slot></h1>
                <p><slot name="description"></slot></p>
            </div>
            <slot name="cover"></slot>
        </div>
        <hr>
    </div>
</template>

<style scoped>

.header {
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 180px;
}



</style>