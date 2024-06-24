<template>
    <div>
        <el-card style="margin:20px 20px;">
            <el-form :inline="true">
                <el-form-item label="一级分类">
                    <el-select placeholder="请输入" style="width:300px;">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类">
                    <el-select placeholder="请输入" style="width:300px;">
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

</script>

<style lang="less" scoped></style>
