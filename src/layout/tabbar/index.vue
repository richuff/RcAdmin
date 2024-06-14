<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <el-icon class="icon1" @click="changemenu">
                <component :is="isfold ? 'Fold' : 'Expand'"></component>
            </el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabbar-right">
            <el-button size="default" type="primary" :icon="Refresh" circle></el-button>
            <el-button size="default" type="primary" :icon="FullScreen" circle></el-button>
            <el-button size="default" type="primary" :icon="Setting" circle></el-button>
            <img src="../../assets/logo.svg" style="width:20px;height:20px">
            <!-- 下拉菜单 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight, FullScreen, Refresh, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
import SettingStore from '@/stores/modules/setting';
let settingStore = SettingStore();
let isfold = ref(false);
const changemenu = () => {
    settingStore.isfold = !settingStore.isfold;
}
</script>

<style lang="less" scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .tabbar-left {
        margin: 20px;
        display: flex;
        align-items: center;

        .icon1 {
            padding: 10px;
        }
    }

    .tabbar-right {
        display: flex;
        align-items: center;

    }
}
</style>