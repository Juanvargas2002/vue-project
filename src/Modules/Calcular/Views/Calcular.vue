<script setup>
    import { computed, ref } from 'vue';
    import ResultadoSection from '../Componentes/ResultadoSection.vue';

    const valor=ref(0)
    const resultado=computed(()=>valor.value*3)
    const mostrarElemento = computed(()=>resultado.value>0)
</script>
<template>
    <h3>Propiedades Computadas</h3>
    <input type="number" v-model="valor">
    <ResultadoSection v-if="mostrarElemento" :resultado="resultado"></ResultadoSection>
    <div v-else>Naranja postobon</div>
</template>
<style scoped>

</style>