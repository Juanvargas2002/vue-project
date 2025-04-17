<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import {schema} from '../Schemas/ValidetionSchema'
    import {useRegistrarStore} from '../stores/RegistrarStore'
    import {ref} from 'vue'
    
    const RegistrarStore = useRegistrarStore()

    const nombre=ref('')
    const email=ref('')

    const onsubmit = ()=>{
        RegistrarStore.guardarRegistro(nombre.value,email.value)
        console.log('El esquema de validacion se ha enviado correctamente')
    }
</script>
<template>
    <div>
        <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
        <div class="mb-2">
            <label for="nombre">Nombre</label>
            <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
            <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div class="mb-2">
            <label for="correo">Email</label>
            <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su Email"/>
            <ErrorMessage name="email"></ErrorMessage>
        </div>
        <div class="mb-2">
            <button type="submit">Registrar</button>
        </div>
    </Form>
    </div>
</template>
<style scoped>
</style>