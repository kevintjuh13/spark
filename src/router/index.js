import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
import firstname from '../views/register/firstname.vue'
import testfile from '../views/testing/testfile.vue'

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
    // {
    //   path: '/age',
    //   name: 'age',
    //   component: age
    // },
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
