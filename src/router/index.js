import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
import firstname from '../views/register/firstname.vue'
import testfile from '../views/testing/testfile.vue'
import age from '../views/register/age.vue'
import intresses from '../views/register/intresses.vue'
import geslacht from '../views/register/geslacht.vue'
import datesTonen from '../views/register/datesTonen.vue'
import foto from '../views/register/foto.vue'

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
    },
    {
      path: '/firstname',
      name: 'firstname',
      component: firstname
    },
    {
      path: '/age',
      name: 'age',
      component: age
    },
    {
      path: '/intresses',
      name: 'intresses',
      component: intresses
    },
    {
      path: '/geslacht',
      name: 'geslacht',
      component: geslacht
    },
    {
      path: '/datesTonen',
      name: 'datesTonen',
      component: datesTonen
    },
    {
      path: '/foto',
      name: 'foto',
      component: foto
    },
    // {
    //   path: '/height',
    //   name: 'height',
    //   component: height
    // },
    // {
    //   path: '/gender',
    //   name: 'gender',
    //   component: gender
    // },
    // {
    //   path: '/show',
    //   name: 'show',
    //   component: show
    // },
    {
      path: '/testfile',
      name: 'testfile',
      component: testfile
    }
  ]
})

export default router
