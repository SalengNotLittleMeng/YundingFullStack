<template>
    <div class="singer">
        <div v-for="item in singers" :key="item">
            <div>
                <slot :item="item" name="picture"></slot>
                <slot :item="item" name="singer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['singers'],
}
</script>
<style>
.singer {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 100px;
}
</style>