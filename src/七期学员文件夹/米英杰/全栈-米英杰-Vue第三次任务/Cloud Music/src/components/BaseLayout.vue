<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<style>
    .container{
        margin: 10px;
    }

    header{
        border-bottom: solid 2px black;
    }

    main{
        border-bottom: solid 1px black;
        padding-bottom: 5px;
    }
</style>