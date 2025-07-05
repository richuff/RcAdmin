<template>
    <el-form label-width="100px">
        <el-form-item label="SPU名称">
            <el-input placeholder="请输入SPU名称" v-model="spuParams.spuName"></el-input>
        </el-form-item>
        <el-form-item label="SPU品牌" style="width: 300px;">
            <el-select placeholder="选择SPU品牌" v-model="spuParams.tmId">
                <el-option v-for="(item, _) in allTradeMark" :key="item.id" :label="item.tmName"
                    :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="SPU名称">
            <el-input type="textarea" placeholder="请输入SPU名称" v-model="spuParams.description"></el-input>
        </el-form-item>
        <el-form-item label="SPU照片">
            <el-upload class="avatar-uploader" v-model:file-list="imgList" action="/api/admin/product/fileUpload"
                list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                :before-upload="handlerUpload">
                <el-icon class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
        </el-form-item>
        <el-form-item label="SPU销售属性">
            <el-select placeholder="" style="width: 200px;">
                <el-option v-for="(item, _) in [1, 2, 3]" :key="item"></el-option>
            </el-select>
            <el-button type="primary" style="margin-left: 10px;" icon="Plus" size="default">添加属性值</el-button>
            <el-table style="margin: 10px 0;" :data="saleAttrList">
                <el-table-column label="序号" align="center" type="index" width="80"></el-table-column>
                <el-table-column label="销售属性值名字" prop="saleAttrName"></el-table-column>
                <el-table-column label="销售属性值">
                    <template #="{ row, $index }">
                        <el-tag v-for="(item, index) in row.saleAttrList" :key="item.id" type="">
                            {{ item.saleAttrName }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template #="{ row, $index }">
                        <el-button type="primary" icon="Delete" size="small"
                            @click="saleAttrList.slice($index, 1)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary">保存</el-button>
            <el-button type="danger" @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import type {
    SpuImg,
    SpuData, AllTradeMark, SpuImgResponse,
    spuSaleAttrValueResponseData, HasSaleAttrResponseData,
    TradeMark,
    SaleAttr,
    HasSaleAttr
} from '@/api/production/spu/type';
import { reqAllTradeMark, reqSpuSaleAttrList, reqAllSaleAttr, reqSpuImageList } from '@/api/production/spu/spu';
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus';
const dialogVisible = ref<boolean>(false)
let $emit = defineEmits(['changeScene'])
let imgList = ref<SpuImg[]>([])
const dialogImageUrl = ref('')
let allTradeMark = ref<TradeMark[]>([])
let saleAttrList = ref<SaleAttr[]>([])
let allHasSaleAttr = ref<HasSaleAttr[]>([])
const cancel = () => {
    $emit('changeScene', 0)
}
let spuParams = ref<SpuData>({
    category3Id: "",
    spuName: "",
    description: "",
    tmId: "",
    spuImageList: [],
    spuSaleAttrList: []
})
const initHasSpuData = async (row: SpuData) => {
    spuParams.value = row
    let result: AllTradeMark = await reqAllTradeMark()
    let result1: SpuImgResponse = await reqSpuImageList(row.id as number)
    let result2: spuSaleAttrValueResponseData = await reqSpuSaleAttrList(row.id as number)
    let result3: HasSaleAttrResponseData = await reqAllSaleAttr()

    //全部的商品图片
    allTradeMark.value = result.data
    //Spu对应的商品图片
    imgList.value = result1.data.map((item: SpuImg) => {
        return {
            name: item.imgName,
            url: item.imgUrl
        }
    })
    //spu的销售属性
    saleAttrList.value = result2.data
    //存储所有的销售数据
    allHasSaleAttr.value = result3.data
}

defineExpose({ initHasSpuData })

const handlePictureCardPreview = (uploadFile: any) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
}

const handleRemove = (file: any) => {
    imgList.value = imgList.value.filter(item => item.name !== file.name)
}

const handlerUpload = (file: any) => {
    if (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
        if (file.size / 1024 / 1024 > 3) {
            ElMessage({
                type: 'error',
                message: "上传的文件大小应该小于3M"
            })
            return false
        }
        return true
    } else {
        ElMessage({
            type: 'error',
            message: "上传的文件应该是png,jpg,jpeg等格式"
        })
        return false
    }
}
let unSelectSaleAttr = computed(() => {
    let unSelectAttr = allHasSaleAttr.value.filter(item => {
        return saleAttrList.value.every(item1 => {
            return item.name != item1.saleAttrName
        })
    })
    return unSelectAttr
})
</script>

<style lang="less" scoped></style>