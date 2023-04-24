import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

export default router
