<template>
    <div class="logo">
        <img src="../../public/favicon.ico" alt="">
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
        padding-left: 20px;
        height: @logoHeight;
        width: 50px;
        display: inline-block;
    }

    p {
        padding-left: 40px;
        font-size: @logomessage ;
    }
}
</style>