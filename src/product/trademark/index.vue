<template>
    <el-card style="width: 100%-260px ;margin:20px 20px;margin-right:20px;">
        <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
        <el-table style="width: 100%;margin:10px 0;" border :data="trademarklist">
            <el-table-column label="序号" width="80px" align="center" type="index" />
            <el-table-column label="品牌名称">
                <template #="{ row, $index }">
                    <pre style="color:red">{{ row.tmName }}</pre>
                </template>
            </el-table-column>
            <el-table-column label="品牌Logo">
                <template #="{ row, $index }">
                    <img :src="getimg(row.logoUrl)" style="height:200px;width:200px">
                </template>
            </el-table-column>
            <el-table-column label="品牌操作">
                <template #="{ row, $index }">
                    <el-button type="primary" size="default" icon="Edit"></el-button>
                    <el-button type="primary" size="default" icon="Delete"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="PageNo" v-model:page-size="PageSize" :page-sizes="pageSizes"
            layout="prev, pager, next, jumper,->,sizes,total " :total="total" @size-change="onMounted"
            @current-change="gethasTardemark" />
    </el-card>

</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { reqHadTrademark } from '../../api/production/trademark'
let PageNo = ref<number>(1);
let PageSize = ref<number>(3);
let pageSizes = ref([3, 5, 7, 9]);

//存储数据
let trademarklist = reactive([]);
let total = ref<number>(0);
let gethasTardemark = async () => {
    let result: any = await reqHadTrademark(PageNo.value, PageSize.value);
    if (result.code == 200) {
        total.value = result.data.total;
        trademarklist = result.data.records;
    }
}
const getimg = (url: any) => {
    if (url.indexOf("http://")) {
        return "http://" + url;
    } else {
        return url;
    }
}
onMounted(() => {
    gethasTardemark();
})

</script>

<style lang="less" scoped></style>