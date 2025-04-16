<script setup>
import contador from './components/Contador.vue'
import {ref} from 'vue'
const verificar=ref(false)
const altercount=()=>{
  verificar.value=!verificar.value
}
</script>

<template>
  <button v-on:click="altercount">alternar ver contador</button>
  <contador v-if="verificar==true"></contador>
</template> 

<style scoped>
</style>