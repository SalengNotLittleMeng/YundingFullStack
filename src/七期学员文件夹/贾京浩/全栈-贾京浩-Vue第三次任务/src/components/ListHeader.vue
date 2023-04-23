<template>
    <div class="listheader">
        <div class="header_left">
            <h2><slot name="ListName"></slot></h2>
            <p><slot name="ListInfo"></slot></p>
        </div>
        <slot name="ListPic"></slot>
    </div>
    <hr/>
</template>

<script>

</script>

<style scoped>
.listheader {
    display: flex;
    justify-content: space-between;
}

.header_left {
    margin-right: 35px;
}
.header {
    display: flex;
    justify-content: space-between;
}

hr {
    border-width: 2px;
    border-color: black;
}
</style>