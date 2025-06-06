<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <el-icon class="icon1" @click="changemenu">
                <component :is="isfold ? 'Fold' : 'Expand'"></component>
            </el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item, index) of $route.matched" v-show="!item.meta.isHid" :key="index"
                    :to="item.path">
                    <el-icon style="margin-top:5px;margin-left:5px;margin-right:5px">
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabbar-right">
            <el-button size="default" type="primary" :icon="Refresh" circle @click="refresh"></el-button>
            <el-button size="default" type="primary" :icon="FullScreen" circle @click="FullSceen"></el-button>
            <el-button size="default" type="primary" :icon="Setting" circle></el-button>
            <img :src="UserStore.avatar" style="width:40px;height:40px;border-radius:50%;margin:0 10px">
            <!-- 下拉菜单 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{ UserStore.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
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
import userStore from '@/stores/modules/user';
let UserStore = userStore();
let settingStore = SettingStore();
let isfold = ref(false);
//引入路由
import { useRouter, useRoute } from 'vue-router';

let $router = useRouter();
let $route = useRoute();
const changemenu = () => {
    settingStore.isfold = !settingStore.isfold;
}

const refresh = () => {
    window.location.reload()
    settingStore.isrefresh = !settingStore.isrefresh;
}

const FullSceen = () => {
    let full = document.fullscreenElement;

    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
//退出登录相关
const logout = async () => {
    //去除token
    await UserStore.UserLogOut();
    $router.push({ path: "/login", query: { redirect: $route.path } });
}
//顶部面包屑
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