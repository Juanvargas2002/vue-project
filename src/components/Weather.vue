<script setup>
    import { useWeather } from '@/Composables/useWeather';
    import { onMounted } from 'vue';
    import { useWeatherStore } from '@/stores/WeatherStore';
    
    const WeatherStore = useWeatherStore()
    onMounted(()=>{
        useWeather()
    })
</script>
<template>
    <h2>La temperatura actual es: {{ WeatherStore.temperatura }}°</h2>
</template>
<style scoped></style>