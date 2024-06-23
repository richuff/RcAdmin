<template>
    <el-card style="width: 100%-260px ;margin:20px 20px;margin-right:20px;">
        <el-button type="primary" size="default" icon="Plus" @click="DialogVisible">添加品牌</el-button>
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
                    <el-button type="primary" size="default" icon="Edit" @click="EditTrademark(row)"></el-button>
                    <el-popconfirm title="你确定删除当前品牌吗?" width="250px" icon="Delete" @confirm="deletetrademark(row.id)">
                        <template #reference>
                            <el-button type="primary" size="default" icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="PageNo" v-model:page-size="PageSize" :page-sizes="pageSizes"
            layout="prev, pager, next, jumper,->,sizes,total " :total="total" @size-change="pagesizechange"
            @current-change="gethasTardemark" />
    </el-card>
    <el-dialog v-model="dialogVisible" :title="FormData.id ? '修改商品' : '添加商品'">
        <el-form width="80%" :model="FormData" :rules="rules" ref="formRef">
            <el-form-item label="商品名称" prop="tmName">
                <el-input placeholder="请输入品牌名称" v-model="FormData.tmName"></el-input>
            </el-form-item>
            <el-form-item label="品牌logo" prop="logoUrl">
                <el-upload multiple action="/api/admin/product/fileUpload" :on-success="handleAvatarSuccess"
                    :show-file-list="false">
                    <img v-if="FormData.logoUrl" :src="FormData.logoUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button type="primary" size="default" @click="cancel">取消</el-button>
            <el-button type="primary" size="default" @click="addTrademark">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { reqHadTrademark, reqAddOrUpdateTrademark, reqRemoveTrademark } from '../../api/production/trademark'
import type { ITrademark } from '../../api/production/type/type'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
let PageNo = ref<number>(1);
let PageSize = ref<number>(3);
let pageSizes = ref([3, 5, 7, 9]);
//存储数据
let trademarklist = ref([]);
//收集表单
let total = ref<number>(0);


let FormData = reactive<ITrademark>({
    tmName: '',
    logoUrl: ''
});
let gethasTardemark = async (page = 1) => {
    if (!FormData.id) {
        PageNo.value = page;
    }
    let result: any = await reqHadTrademark(PageNo.value, PageSize.value);
    if (result.code == 200) {
        total.value = result.data.total;
        trademarklist.value = result.data.records;
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

const pagesizechange = (newpageSizes: number) => {
    gethasTardemark();
}

const dialogVisible = ref<boolean>(false);

//提示对话框
const DialogVisible = () => {

    FormData.id = 0;
    FormData.logoUrl = '';
    FormData.tmName = '';
    dialogVisible.value = true;
    formRef.value?.clearValidate('tmName');
    formRef.value?.clearValidate('logoUrl');
}

//关闭对话框
const cancel = () => {
    dialogVisible.value = false;
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    FormData.logoUrl = response.data;
    formRef.value.clearValidate('logoUrl');
}

//获取组件对象
let formRef = ref();

//发送添加品牌的请求
const addTrademark = async () => {
    await formRef.value.validate();
    let result: any = await reqAddOrUpdateTrademark(FormData);
    if (result.code == 200) {
        cancel();
        ElMessage({
            type: 'success',
            message: FormData.id ? '修改商品成功' : '添加商品成功'
        })
        gethasTardemark();
    } else {
        cancel();
        ElMessage({
            type: 'error',
            message: FormData.id ? '修改商品失败' : '添加商品失败'
        })
    }

}

const EditTrademark = (row: any) => {
    dialogVisible.value = true;
    FormData.id = row.id;
    FormData.tmName = row.tmName;
    FormData.logoUrl = row.logoUrl;
}

const validatorTmName = (rule: any, value: any, callback: any) => {
    if (value.length >= 2) {
        callback();
    } else {
        callback(new Error("品牌名字必须大于两位"));
    }
}

const rules = {
    tmName: [
        { required: true, trigger: 'blur', validator: validatorTmName }
    ],
    logoUrl: [
        { required: true }
    ]
}
//确认删除回调
const deletetrademark = async (id: number) => {
    let result: any = await reqRemoveTrademark(id);

    if (result.code == 200) {
        ElMessage({
            type: "success",
            message: "删除成功"
        })
        gethasTardemark(trademarklist.value.length > 1 ? PageNo.value : PageNo.value - 1);
    } else {
        ElMessage({
            type: "error",
            message: "删除失败"
        })
    }
}
</script>

<style lang="less" scoped>
.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
    border: 1px solid black;
}
</style>