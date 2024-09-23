<template>
  <div class="container">
    <h1>{{ props.msg }}</h1>
    <span>{{ infoStore.count }}</span>
    <button @click="infoStore.getNumber">点击变换</button>
    <button @click="add">点击触发</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import info from '../stores/modules/info'
import { UserLogin } from '../api/user/index';
const props = defineProps({
  msg: String
})
let infoStore: any = info()
let add: any = computed(() => {
  return console.log(infoStore.getadd)
});

</script>

<style scoped lang="less">
.container {
  span {
    background-color: @bgColor;
    height: 100px;
  }
}
</style>
