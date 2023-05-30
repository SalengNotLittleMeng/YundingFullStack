<template>
    <div>
    我是用户:{{ $route.params.id }}
    <div class="big" @click="more('大号')">{{ $route.params.id }}的大号</div>
    <div class="small" @click="more('小号')">{{ $route.params.id }}的小号</div>
    <RouterView />
    </div>
</template>

<script setup>
import { useRouter,useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()

function more(thing){
    router.push("/HomeView/user/" + route.params.id + "/detail" + '/' + thing)
}
</script>

<style scoped>

.big,.small {
    cursor: pointer;
}

</style>