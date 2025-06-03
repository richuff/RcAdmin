<template>
    <div class="layout_container">
        <div class="left_meun">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <Menu :meunlist="userstore.meunRoutes"></Menu>
            </el-scrollbar>
        </div>
        <div class="top_nav" :class="{ fold: settingStore.isfold }">
            <Tabbar></Tabbar>
        </div>

        <div class="layout_main" :class="{ fold: settingStore.isfold }">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue';
import Menu from './menu/index.vue';
import userStore from '@/stores/modules/user';
/* 头部导航 */
import Tabbar from './tabbar/index.vue'
/* import { useRouter } from 'vue-router'
let $router = useRouter(); */
/* 引入设置仓库 */
import SettingStore from '@/stores/modules/setting';
let settingStore = SettingStore();
let userstore = userStore();

</script>

<style lang="less" scoped>
@import url(../styles/base.less);

.layout_container {
    height: 100vh;
    width: calc(10% - @topNavHeight);
}

.left_meun {
    width: @bgmeunwidth;
    height: 100vh;
    background-color: @bgmeuncolo;
    transition: all 0.5s;

    .scroll-item {
        width: 102%;
        height: calc(100vh - @logoHeight);
    }
}

.left_meun.fold {
    width: @baseSizeMeun;
}

.top_nav {
    position: fixed;
    width: calc(100% - @bgmeunwidth);
    height: @topNavHeight;
    background-color: @topBgColor;
    left: @bgmeunwidth;
    top: 0;
    transition: all 0.5s;
}

.top_nav.fold {
    left: @baseSizeMeun;
    width: calc(100% - @baseSizeMeun);
}

.layout_main {
    position: absolute;
    background-color: blue;
    width: calc(100% - @bgmeunwidth);
    height: calc(100vh - @topNavHeight);
    left: @bgmeunwidth;
    top: @topNavHeight;
    transition: all 0.5s;
}

.layout_main.fold {
    left: @baseSizeMeun;
    width: calc(100% - @baseSizeMeun);
}
</style>