<script setup>
    import SideBar from '@/components/SideBar.vue';
    import Header from '@/components/Header.vue';
    import { ref } from 'vue';

    const texto =ref('')

</script>
<template>
    <Header :mensaje="texto"></Header>
<div class="d-flex mt-30px">
    <SideBar></SideBar>
    <div class="flex-grow-1 p-3">
        <input type="text" v-model="texto">
        {{ texto }}
        <router-view></router-view>
    </div>
</div>

</template>
<style scoped>
    .mt-30px{
        margin-top: 30px;
    }
</style>