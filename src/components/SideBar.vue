<script setup>

</script>
<template>
    <div class="bg-light p-3 w-20">
        <h2>esta es una side bar</h2>
        <ul>
        <li>
        <router-link to="/Contador">Contador</router-link>
        </li>
        <li>
        <router-link to="/Lista-de-tareas">Lista de Tareas</router-link>
        </li>
        </ul>
    </div>
</template>
<style scoped>
    .w-20{
        width: 20%;
        min-width: 132px;
        max-width: 210px;
    }
</style>