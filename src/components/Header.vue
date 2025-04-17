<script setup>
    import Weather from './Weather.vue';
    import { defineProps, ref, watch } from 'vue';

    const props = defineProps(['mensaje'])
    const mensajerecibo = ref(props.mensaje)
    watch(()=>props.mensaje,(newMensaje)=>{
        mensajerecibo.value=newMensaje
    })

</script>
<template>
    <div name="header" class="d-flex justify-content-center align-items-center py-2 px-4 bg-dark text-white fixed-top">
    {{ mensajerecibo }}<Weather></Weather>
    </div>  
</template>
<style scoped>

</style>