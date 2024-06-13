<template>
    <div class="layout_container">
        <div class="left_meun">
            <Logo></Logo>
            <Menu :meunlist="userstore.meunRoutes"></Menu>
        </div>
        <div class="top_nav">
            导航栏
        </div>

        <div class="layout_main">
            <p style="height:10000px">sadadsa</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/Logo/index.vue';
import Menu from '@/menu/index.vue';
import userStore from '@/stores/modules/user';
let userstore = userStore();

</script>

<style lang="less" scoped>
@import url(../styles/base.less);

.layout_container {
    height: 100vh;
    width: 100%;
}

.left_meun {
    width: @bgmeunwidth;
    height: 100vh;
    background-color: @bgmeuncolo;

    .scroll-item {
        width: 102%;
        height: calc(100vh - @logoHeight);
    }
}

.top_nav {
    position: fixed;
    width: calc(100% - @bgmeunwidth);
    height: @topNavHeight;
    background-color: green;
    left: @bgmeunwidth;
    top: 0;
}

.layout_main {
    position: absolute;
    background-color: blue;
    width: calc(100% - @bgmeunwidth);
    height: calc(100vh - @topNavHeight);
    left: @bgmeunwidth;
    top: @topNavHeight;
}
</style>