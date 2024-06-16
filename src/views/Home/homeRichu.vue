<template>
    <div>
        <div>
            <img src="" alt="">
            <h1>{{ getTime() }}好{{ UserStore.username }}</h1>
            <span></span>
        </div>
        <img src="">
    </div>
</template>

<script setup lang="ts">
import userStore from '@/stores/modules/user';
import { onMounted } from 'vue';
let UserStore = userStore();
import { getTime } from '../../utils/time';
onMounted(() => {
    UserStore.userinfo();
})



</script>

<style scoped></style>