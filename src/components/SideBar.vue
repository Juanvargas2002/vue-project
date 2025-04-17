<script setup>

    import { useRegistrarStore } from '@/Modules/Registro/stores/RegistrarStore';
    import {computed, watch} from 'vue'

    const RegistrarStore = useRegistrarStore()

    const nombre=computed(()=>RegistrarStore.nombre)
    const email=computed(()=>RegistrarStore.email)
    
    watch(()=>RegistrarStore.nombre,(newnombre)=>{
        console.log('Cambio el nombre: ' + newnombre)
    })
    watch(()=>RegistrarStore.email,(newemail)=>{
        console.log('Cambio el email: ' + newemail)
    })
</script>
<template>
    <div class="bg-light p-3 w-35">
        <h2>Bienvenido</h2>
        <h4 class="fs-5">Nombre:{{ nombre }}</h4>
        <h4 class="fs-5">Email:{{ email }}</h4>
        <ul>
        <li>
        <router-link to="/Contador">Contador</router-link>
        </li>
        <li>
        <router-link to="/Lista-de-tareas">Lista de Tareas</router-link>
        </li>
        <li>
        <router-link to="/Registrar">Formulario de registro</router-link>
        </li>
        </ul>
    </div>
</template>
<style scoped>
    .w-35{
        width: 35%;
        min-width: 160px;
        max-width: 360px;
    }
</style>