<template>
    <router-view v-slot="{ Component }">
        <transition name='fade'>
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: linear 1s;
}

.fade-enter-to {
    opacity: 1;
}
</style>