<template>
  <!-- <div class="wrapper">
    <HelloWorld msg="You did it!" />
    <el-button type="primary">Primary</el-button>
    <br>
    <el-button type="danger" :icon="Delete" circle />
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
    <el-pagination :page-sizes="[100, 200, 300, 400]" layout="sizes, prev, pager, next" :total="1000" />
  </div> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import HelloWorld from './components/HelloWorld.vue'

</script>

<style scoped></style>
