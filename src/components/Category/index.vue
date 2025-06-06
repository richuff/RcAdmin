<template>
    <div>
        <el-card style="margin:20px 20px;">
            <el-form :inline="true">
                <el-form-item label="一级分类">
                    <el-select :disabled="props.scren == 0 ? false : true" style="width:300px;"
                        v-model="cateGoryStore.C1ID" @change="handlered">
                        <el-option v-for="(item, index) in cateGoryStore.C1Arr" :key="item.id" :label="item.name"
                            :value="item.id" />
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类">
                    <el-select :disabled="props.scren == 0 ? false : true" style="width:300px;"
                        v-model="cateGoryStore.C2ID" @change="handlered1">
                        <el-option v-for="(c2, index) in cateGoryStore.C2Arr" :key="c2.id" :label="c2.name"
                            :value="c2.id" />
                    </el-select>
                </el-form-item>
                <el-form-item label="三级分类">
                    <el-select :disabled="props.scren == 0 ? false : true" style="width:300px;"
                        v-model="cateGoryStore.C3ID">
                        <el-option v-for="(c3, index) in cateGoryStore.C3Arr" :key="c3.id" :label="c3.name"
                            :value="c3.id" />
                    </el-select>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import CateGoryStore from '@/stores/modules/category';
let cateGoryStore = CateGoryStore();
interface Props {
    scren: number | null
}
let props = defineProps<Props>()
//引入生命周期钩子
import { onMounted, watch } from 'vue';
onMounted(() => {
    getC1();
})

const getC1 = () => {
    //通知分类仓库发请求获取第一类的数据
    cateGoryStore.getC1();
}

//一级菜单选中某个值
const handlered = () => {
    cateGoryStore.C2Arr = [];
    cateGoryStore.C2ID = "";
    cateGoryStore.C3Arr = [];
    cateGoryStore.C3ID = "";
    cateGoryStore.getC2();
}

//二级菜单选中某个值
const handlered1 = () => {
    cateGoryStore.C3Arr = [];
    cateGoryStore.C3ID = "";
    cateGoryStore.getC3();
}
watch(() => cateGoryStore.C3ID, async () => {
    cateGoryStore.AttrList = []
    if (!cateGoryStore.C3ID) return
    await cateGoryStore.getAttr()
})
</script>

<style lang="less" scoped></style>
