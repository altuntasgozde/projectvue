import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:"app",
      component: () => import('../App.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/NameTable.vue')
    }
  ]
})

export default router
