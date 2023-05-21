<template>
    <div class="top">
        <div class="topsinger">
            <slot name="top"></slot>
            <slot name="medium"></slot>
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["singer"],
    // data() {

    // }
}
</script>

<style>
.top {
    display: flex;
    margin-top: 5px;
}

.topsinger {
    margin-right: 20px;
    display: flex;
}

/* .img{
    margin-right: 20px;
} */
img {
    width: 100px;
    height: 100px;
}

h6 {
    text-align: center;
}
</style>