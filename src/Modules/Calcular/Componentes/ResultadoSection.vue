<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['resultado'])
</script>
<template>
    <div :class="{'bg-danger-subtle':props.resultado<20,'bg-success-subtle':props.resultado>19}">{{ props.resultado }}</div>
</template>
<style scoped>

</style>