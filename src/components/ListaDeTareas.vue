<script setup>
 import {ref} from 'vue'
 const tareas=ref([])
 const nuevaTarea=ref('')

 const addTarea=()=>{
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value='.i.'
 }
 
</script>
<template>
    <div>
        <h2>
            Lista de tareas
        </h2>
        <input type="text" v-model="nuevaTarea" v-on:keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea,index) in tareas" v-bind:key="index">
                {{tarea}}
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>