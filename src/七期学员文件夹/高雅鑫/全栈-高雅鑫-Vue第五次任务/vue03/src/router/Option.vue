<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <h2 class="alert">您的选择是:<br /> {{ $a[i].value }}</h2>
</template>

<script setup>
var a = document.getElementsByTagName('li');
for (var i = 0; i < a.length; i++) {
    a[i].index = i;
    a[i].addEventListener('click', function () {
        console.log(a[i].index)
        var b = document.getElementsByClassName("elert");
        b.style.display = "inline";
    })
}
</script>