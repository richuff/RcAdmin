<template>
    <div>
        <div>
            <Category :scren="scren" />
        </div>
        <el-card style="margin:20px 20px;">
            <div v-show="scren == 0">
                <el-button type="primary" size="default" icon="Plus" @click="addAttr"
                    :disabled="!cateGoryStore.C3ID">添加属性</el-button>
                <el-table style="width: 100%;height:490px;margin:10px 0px;" :data="cateGoryStore.AttrList">
                    <el-table-column label="序号" align="center" type="index" width="80px" />
                    <el-table-column label="属性值名称" width="240px" prop="attrName" />
                    <el-table-column label="属性值">
                        <template #="{ row, _ }">
                            <el-tag v-for="(item, _) in row.attrValueList" :key="item.id">{{ item.valueName }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="240px;">
                        <template #="{ row, _ }">
                            <el-button type="primary" icon="Edit" @click="updateAttr">编辑</el-button>
                            <el-button type="danger" icon="Delete">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-show="scren == 1">
                <el-form :inlie="true">
                    <el-form-item label="属性名称">
                        <el-input placeholder="请输入属性名称"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" icon="Plus">添加属性值</el-button>
                <el-button type="warning" @click="cancel">取消</el-button>
                <el-table border style="margin:10px 0">
                    <el-table-column label="序号" type="index" width="80px"></el-table-column>
                    <el-table-column label="属性值名称"></el-table-column>
                    <el-table-column label="属性值操作"></el-table-column>
                </el-table>
                <el-button type="primary">保存</el-button>
                <el-button type="warning" @click="cancel">取消</el-button>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CateGoryStore from '@/stores/modules/category';
let cateGoryStore = CateGoryStore();
let scren = ref<number>(0)

const addAttr = () => {
    scren.value = 1
}
const updateAttr = () => {
    scren.value = 1
}
const cancel = () => {
    scren.value = 0
}
</script>

<style lang="less" scoped></style>