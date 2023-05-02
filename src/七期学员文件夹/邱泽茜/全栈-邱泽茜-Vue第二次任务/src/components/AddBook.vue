<template>
<button @click="addBook(this.newBook)" v-show="active">添加</button>
<button @click="decide" v-show="!active">确认</button>
<button @click="show" v-show="!active">取消</button>
</template>

<script>
    export default {
        emits: ["showInput","addBook","update"],
        props: {
            books: {
                type: Array,
                required:true,
                default: () => {}
            }
        },
        data() {
            return {
                active: true,
                newBook: [{
                    name: '',
                    price: '',
                    count: 1
                }]
            }
        },
        methods: {
            show() {
                this.active = !this.active
                this.$emit("showInput")
            },
            addBook() {
                this.active = !this.active
                this.$emit("addBook")
            },
            decide() {
                this.active = !this.active
                this.$emit("update")
            }
        }
}
</script>

<style>

</style>