import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/Contador',
      name: 'contador',
      component: () => import('../Modules/Contador/Component/Contador.vue'),
    },
    {
      path: '/Lista-de-tareas',
      name: 'Lista De Tareas',
      component: () => import('../Modules/Lista de tareas/Component/ListaDeTareas.vue'),
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../Modules/Registro/Views/RegistroView.vue'),
    },
    {
      path: '/Calcular',
      name: 'Calcular',
      component: () => import('../Modules/Calcular/Views/Calcular.vue')
    }
  ],
})

export default router
