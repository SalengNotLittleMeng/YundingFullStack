<template>
    <div class="category">
        <h3>{{ title }}</h3>
        <!-- 使用默认插槽 -->
        <slot></slot>
        <!-- 使用具名插槽 -->
        <slot name="description"></slot>
        <slot name="list"></slot>

    </div>
</template>


<script>
export default {
    name: 'Category',
    props: ['title'],


}
</script>


<style scoped>
.category {
    margin: 0 auto;
    text-align: left;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    opacity: 0.8;

}

h3 {
    text-align: center;
    background-color: skyblue;
    opacity: 0.8;
}
</style>