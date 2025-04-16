<script setup>
    import SideBar from '@/components/SideBar.vue';
</script>
<template>
<div class="d-flex">
    <SideBar></SideBar>
    <div class="flex-grow-1 p-3">
        <router-view></router-view>
    </div>
</div>

</template>
<style scoped>

</style>