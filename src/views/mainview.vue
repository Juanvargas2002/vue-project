<script setup>
    import SideBar from '@/components/SideBar.vue';
    import Header from '@/components/Header.vue';
</script>
<template>
    <Header></Header>
<div class="d-flex mt-30px">
    <SideBar></SideBar>
    <div class="flex-grow-1 p-3">
        <router-view></router-view>
    </div>
</div>

</template>
<style scoped>
    .mt-30px{
        margin-top: 30px;
    }
</style>