import { defineStore } from "pinia"
import {ref} from 'vue'

export const useRegistrarStore =  defineStore('registrar',()=>{
    const nombre = ref('')
    const email = ref('')
    const guardarRegistro = (nombreform,emailform)=>{
        nombre.value=nombreform
        email.value=emailform
    }
    return {nombre,email,guardarRegistro}
})