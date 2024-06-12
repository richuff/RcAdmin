<template>
    <div class="layout_container">
        <div class="left_meun">
            <Logo></Logo>
            <el-scrollbar class="scroll-item">
                <el-menu background-color="#8470FF" text-color="white">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item>
                    <!-- 折叠菜单 -->
                    <el-sub-menu index="3">
                        <template #title>
                            <span>权限管理</span>
                        </template>
                        <el-menu-item index="2-1">用户管理</el-menu-item>
                        <el-menu-item index="2-2">角色管理</el-menu-item>
                        <el-menu-item index="2-3">菜单管理</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
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
import Logo from '../Logo/index.vue';
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