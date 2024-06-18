<template>
    <el-card style="width: 100%-260px ;margin:20px 20px;margin-right:20px;">
        <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
        <el-table style="width: 100%;margin:10px 0;">
            <el-table-column label="序号" width="80px" align="center" />
            <el-table-column label="品牌名称" />
            <el-table-column label="品牌Logo" />
            <el-table-column label="品牌操作" />
        </el-table>
        <el-pagination v-model:current-page="PageNo" v-model:page-size="PageSize" :page-sizes="pageSizes"
            layout="prev, pager, next, jumper,->,sizes,total " :total="400" />
    </el-card>

</template>

<script setup lang="ts">
import { ref } from 'vue';
let PageNo = ref<number>(1);
let PageSize = ref<number>(3);
let pageSizes = ref([3, 5, 7, 9])
</script>

<style lang="less" scoped></style>