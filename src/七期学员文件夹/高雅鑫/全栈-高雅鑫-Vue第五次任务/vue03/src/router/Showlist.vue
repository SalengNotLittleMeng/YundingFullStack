<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="showbox">
        <ul id="list">
            <li>吃饭</li>
            <li>睡觉</li>
            <li>打豆豆</li>
        </ul>
        <input id="inputbox" placeholder="请输入选项">
    </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
$(document).ready(function () {
    // eslint-disable-next-line no-undef
    $("input").keydown(function (event) {
        if (event.keyCode == 13) {
            var newoption = document.getElementById("inputbox").value;
            var li = document.createElement("li");
            li;
            li.className = "active";
            li.innerHTML = newoption;
            document.getElementById("list").appendChild(li);
        }
    })
})

</script>

<style scoped>
.alert {
    display: none;
}
</style>