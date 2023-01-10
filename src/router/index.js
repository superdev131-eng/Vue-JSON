import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VoyageBonus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crew-data',
      name: 'CrewData',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CrewDataCV.vue')
    }
  ]
})

export default router
