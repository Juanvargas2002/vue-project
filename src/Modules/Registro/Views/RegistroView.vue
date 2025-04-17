<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import {schema} from '../Schemas/ValidetionSchema'

    const onsubmit = ()=>{
        console.log('El esquema de validacion se ha enviado correctamente')
    }
</script>
<template>
    <div>
        <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
        <div class="mb-2">
            <label for="nombre">Nombre</label>
            <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
            <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div class="mb-2">
            <label for="correo">Email</label>
            <Field type="email" name="email" id="correo" placeholder="Ingrese su Email"/>
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