<template>
    <div class="app">
        <div class="headlinebox">
            <slot name="headline"></slot>
            <slot name="coverImg"></slot>
            <slot name="descrip"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style>
.app{
    border-bottom: 2px solid black;
    padding: 20px;
}

.headlinebox{
    border-bottom: 3px solid black;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>