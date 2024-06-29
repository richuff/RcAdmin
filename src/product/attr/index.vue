<template>
    <div>
        <div>
            <Category />
        </div>
        <el-card style="margin:20px 20px;">
            <el-button type="primary" size="default" icon="Plus" :disabled="!cateGoryStore.C3ID">添加属性</el-button>
            <el-table style="width: 100%;margin:10px 0px;">
                <el-table-column label="序号" align="center" type="index" width="80px" />
                <el-table-column label="属性值名称" width="240px" />
                <el-table-column label="属性值" />
                <el-table-column label="操作" width="240px" />
            </el-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CateGoryStore from '@/stores/modules/category';
let cateGoryStore = CateGoryStore();

</script>

<style lang="less" scoped></style>