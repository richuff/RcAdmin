<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" v-if="flag" />
    </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import SettingStore from '@/stores/modules/setting';
let settingStore = SettingStore();

//控制当前组件是否销毁中间
let flag = ref(true);

watch(() => settingStore.isrefresh, () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
    })
})

</script>

<style lang="less"></style>