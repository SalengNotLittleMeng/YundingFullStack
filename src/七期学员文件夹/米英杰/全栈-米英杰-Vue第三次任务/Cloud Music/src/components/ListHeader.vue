<template>
    <div class="listHeader">
        <div>
            <slot name="words"></slot>
        </div>
        <slot name="listImg"></slot>
    </div>
</template>

<style>
  .listHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .listHeader h2{
    font-weight: 500;
  }

  .listImg{
    width: 120px;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 5px;
  }

  .description{
    width: 200px;
    height: 100px;
    color: grey;
    font-size: 14px;
  }
</style>
