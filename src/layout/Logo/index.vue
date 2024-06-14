<template>
    <div class="logo">
        <img src="../../assets/logo.svg" alt="">
        <p>欢迎</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.logo {
    width: 100%;
    height: @logoHeight;
    color: white;
    display: flex;
    align-items: center;

    img {
        padding-left: 10px;
        height: @logoHeight;
        width: 30px;
        display: inline-block;
    }

    p {
        padding-left: 40px;
        font-size: @logomessage ;
    }
}
</style>