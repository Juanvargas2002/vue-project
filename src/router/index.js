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
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/Lista-de-tareas',
      name: 'Lista De Tareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
