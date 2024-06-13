<template>
    <template v-for="item of meunlist" :key="index">
        <el-menu default-active="">
            <!-- 展示只有一级路由的，不需要折叠 -->
            <el-menu-item v-if="!item.children" :index="item.path">
                <template #title>
                    <span>图标</span>
                    <span>
                        {{ item.meta.title }}
                    </span>
                </template>
            </el-menu-item>
            <!-- 展示有子路由只有一个的，不需要折叠 -->
            <el-menu-item v-if="item.children && item.children.length == 1" :index="item.path">
                <template #title>
                    <span>图标</span>
                    <span>
                        {{ item.children[0].meta.title }}
                    </span>
                </template>
            </el-menu-item>
            <!-- 展示只有一级路由的，不需要折叠 -->
        </el-menu>
    </template>
</template>

<script setup lang="ts">
defineProps(['meunlist'])


</script>

<style scoped></style>