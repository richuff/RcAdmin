<template>
    <template v-for="item of meunlist" :key="item.path">
        <el-menu>
            <!-- 展示只有一级路由的，不需要折叠 -->
            <el-menu-item v-if="!item.meta.isHidden && !item.children" :index="item.path">
                <template #title>
                    <span>图标</span>
                    <span>
                        {{ item.meta.title }}
                    </span>
                </template>
            </el-menu-item>
            <!-- 展示有子路由只有一个的，不需要折叠 -->
            <el-menu-item v-if="!item.meta.isHidden && item.children && item.children.length == 1"
                :index="item.children[0].path">
                <template #title>
                    <span>图标</span>
                    <span>
                        {{ item.children[0].meta.title }}
                    </span>
                </template>
            </el-menu-item>
            <!-- 展示只有一级路由的，需要折叠 -->
            <el-sub-menu v-if="!item.meta.isHidden && item.children && item.children.length > 1" :index="item.path">
                <template #title>
                    <span>图标</span>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item v-for="item1 of item.children" :index="item1.path">
                    <span>图标</span>
                    <span>
                        {{ item1.meta.title }}
                    </span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </template>
</template>

<script setup lang="ts">
defineProps(['meunlist'])


</script>

<style scoped></style>