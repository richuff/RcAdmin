<template>
    <div>
        <el-card style="margin:20px 20px;">
            <el-form :inline="true">
                <el-form-item label="一级分类">
                    <el-select style="width:300px;" v-model="cateGoryStore.C1ID">
                        <el-option v-for="(item, index) of cateGoryStore.C1Arr" :key="item.id" :label="item.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类">
                    <el-select style="width:300px;">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="三级分类">
                    <el-select placeholder="请输入" style="width:300px;">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import CateGoryStore from '@/stores/modules/category';
let cateGoryStore = CateGoryStore();


//引入生命周期钩子
import { onMounted } from 'vue';
onMounted(() => {
    getC1();
})

const getC1 = () => {
    //通知分类仓库发请求获取第一类的数据
    cateGoryStore.getC1();
}
</script>

<style lang="less" scoped></style>
