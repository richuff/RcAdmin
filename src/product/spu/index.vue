<template>
    <div>
        <Category :scren="scren"></Category>
        <el-card style="margin:10px 10px">
            <div v-show="scren == 0">
                <el-button type="primary" :disabled="!cateGoryStore.C3ID" icon="Plus">添加SPU</el-button>
                <el-table :data="records">
                    <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
                    <el-table-column label="SPU名称" prop="spuName"></el-table-column>
                    <el-table-column label="SPU描述" prop="description"></el-table-column>
                    <el-table-column label="SPU操作">
                        <template #="{ row, $index }">
                            <el-button type="primary" size="small" icon="Plus" @click="addSpu" title="添加SKU" />
                            <el-button type="warning" size="small" icon="Edit" @click="updateSpu(row)" title="修改SKU" />
                            <el-button type="info" size="small" icon="View" title="查看SKU" />
                            <el-button type="danger" size="small" icon="Delete" title="删除SKU" />
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination style="margin-top: 10px;" v-model:current-page="pageNo" v-model:page-size="pageSize"
                    :background="true" :page-sizes="[3, 5, 7, 9]" layout="prev, pager, next,jumper,->,sizes,total"
                    :total="total" @current-change="getSpu" @size-cahnge="changeSize" />
            </div>
            <SpuForm ref="spu" @changeScene="changeScene" v-show="scren == 1"></SpuForm>
            <SkuForm v-show="scren == 2"></SkuForm>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { reqHasSpu } from '@/api/production/spu/spu';
import CateGoryStore from '@/stores/modules/category';
import type { HasSpuDataResponseData, Records, SpuData } from '@/api/production/spu/type';
import SpuForm from './spuForm.vue';
import SkuForm from './skuForm.vue';
let cateGoryStore = CateGoryStore();
let total = ref<number>(0)
let scren = ref<number>(0)
let pageNo = ref<number>(1)
let pageSize = ref<number>(3)
let records = ref<Records>([])
let spu = ref<any>()
watch(() => cateGoryStore.C3ID, () => {
    getSpu()
})

const getSpu = async (pager = 1) => {
    pageNo.value = pager
    let result: HasSpuDataResponseData = await reqHasSpu(pageNo.value, pageSize.value, cateGoryStore.C3ID)
    if (result.code == 200) {
        records.value = result.data.records
        total.value = result.data.total
    }
}

const changeSize = () => {
    getSpu()
}

const addSpu = () => {
    scren.value = 1
}

const updateSpu = (row: SpuData) => {
    scren.value = 1
    spu.value.initHasSpuData(row)
}

//子组件通知父组件将场景置为0
const changeScene = (index: number) => {
    scren.value = index
}
</script>

<style lang="less" scoped></style>