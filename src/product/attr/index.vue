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
                            <el-button type="primary" icon="Edit" @click="updateAttr(row)">编辑</el-button>
                            <el-popconfirm title="是否确认删除" @confirm="deleteAttr(row.id)">
                                <template #reference>
                                    <el-button type="danger" icon="Delete">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-show="scren == 1">
                <el-form :inlie="true">
                    <el-form-item label="属性名称">
                        <el-input v-model="attrvalue.attrName" placeholder="请输入属性名称"></el-input>
                    </el-form-item>
                </el-form>
                <el-button @click="addAttrList" :disabled="attrvalue.attrName ? false : true" type="primary"
                    icon="Plus">添加属性值</el-button>
                <el-button type="warning" @click="attrvalue.attrName = ''">取消</el-button>
                <el-table :data="attrvalue.attrValueList" border style="margin:10px 0">
                    <el-table-column label="序号" type="index" width="80px"></el-table-column>
                    <el-table-column label="属性值名称">
                        <template #="{ row, $index }">
                            <el-input :ref="(vc: any) => inputAttr[$index] = vc" v-if="row.flag" v-model="row.valueName"
                                @blur="() => toLook(row, $index)" placeholder="请输入名称" />
                            <div v-else @click="() => toEdit(row, $index)">{{ row.valueName }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="属性值操作">
                        <template #="{ _, $index }">
                            <el-tag @click="removeAttr($index)" type="danger" class="tag-delete">
                                <Delete style="width: 1em; height: 1em; margin-right: 8px" />
                            </el-tag>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button type="primary" @click="saveAttr"
                    :disabled="attrvalue.attrValueList.length == 0">保存</el-button>
                <el-button type="warning" @click="cancel">取消</el-button>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, onBeforeMount } from 'vue';
import CateGoryStore from '@/stores/modules/category';
import type { Attr, AttrValue } from '@/api/production/attr/type';
import { reqUpdateAttr, reqDeleteAttr } from '@/api/production/attr/attr';
import { ElMessage } from "element-plus";
let cateGoryStore = CateGoryStore();
let scren = ref<number>(0)
let flag = ref<boolean>(true)
let attrvalue = reactive<Attr>({
    attrName: "",
    attrValueList: [

    ],
    categoryId: cateGoryStore.C3ID,
    categoryLevel: 3
})
let inputAttr = ref<any>([])

const addAttr = () => {
    scren.value = 1

    Object.assign(attrvalue, {
        attrName: "",
        attrValueList: [

        ],
        categoryId: cateGoryStore.C3ID,
        categoryLevel: 3
    })
}

const updateAttr = (row: Attr) => {
    scren.value = 1
    Object.assign(attrvalue, JSON.parse(JSON.stringify(row)))
}

const deleteAttr = async (id: number) => {
    let res: any = await reqDeleteAttr(id)

    if (res.code == 200) {
        ElMessage({
            type: "success",
            message: "删除成功"
        })
        cateGoryStore.getAttr()
    } else {
        ElMessage({
            type: "error",
            message: "删除失败"
        })
    }
}

const cancel = () => {
    scren.value = 0

    Object.assign(attrvalue, {
        attrName: "",
        attrValueList: [

        ],
        categoryId: cateGoryStore.C3ID,
        categoryLevel: 3
    })
}

const addAttrList = () => {
    attrvalue.attrValueList.push({
        valueName: "",
        flag: flag.value
    })
    nextTick(() => {
        inputAttr.value[inputAttr.value.length - 1].focus()
    })
}

const saveAttr = async () => {
    let result: any = await reqUpdateAttr(attrvalue)
    if (result.code === 200) {
        scren.value = 0

        ElMessage({
            type: 'success',
            message: attrvalue.id ? "修改成功" : "添加成功"
        })
        await cateGoryStore.getAttr()
    } else {
        ElMessage({
            type: 'success',
            message: attrvalue.id ? "修改失败" : "添加失败"
        })
    }
}

const toLook = (row: AttrValue, $index: number) => {
    if (row.valueName.trim() === '') {
        attrvalue.attrValueList.splice($index, 1)
        ElMessage({
            type: 'error',
            message: "输入不能为空"
        })
        return
    }
    if (attrvalue.attrValueList.find((item) => {
        if (item != row) {
            return item.valueName === row.valueName
        }
    })) {
        attrvalue.attrValueList.splice($index, 1)
        ElMessage({
            type: 'error',
            message: "属性值不能重复"
        })
        return
    }
    row.flag = false
}

const toEdit = (row: AttrValue, $index: number) => {
    row.flag = true

    nextTick(() => {
        inputAttr.value[$index].focus()
    })
}

const removeAttr = ($index: number) => {
    attrvalue.attrValueList.splice($index, 1)

    inputAttr.value.splice($index, 1)
}

onBeforeMount(() => {
    cateGoryStore.$reset()
})
</script>

<style lang="less" scoped>
.tag-delete:hover {
    cursor: pointer;
}
</style>