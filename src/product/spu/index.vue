<template>
    <div>
        <Category :scren="scren"></Category>
        <el-card style="margin:10px 10px">
            <el-button type="primary" icon="Plus">添加SPU</el-button>
            <el-table :data="null">
                <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
                <el-table-column label="SPU名称"></el-table-column>
                <el-table-column label="SPU描述"></el-table-column>
                <el-table-column label="SPU操作"></el-table-column>
            </el-table>
            <el-pagination style="margin-top: 10px;" v-model:current-page="pageNo" v-model:page-size="pageSize"
                :background="true" :page-sizes="[3, 5, 7, 9]" layout="prev, pager, next,jumper,->,sizes,total"
                :total="400" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let scren = ref<number>(0)
let pageNo = ref<number>(1)
let pageSize = ref<number>(3)
</script>

<style lang="less" scoped></style>