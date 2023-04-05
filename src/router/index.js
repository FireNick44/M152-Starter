import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aufgabe1 from '../views/Pages/Aufgabe1.vue'
import Aufgabe2 from '../views/Pages/Aufgabe2.vue'
import Aufgabe3 from '../views/Pages/Aufgabe3.vue'
import Aufgabe4 from '../views/Pages/Aufgabe4.vue'
import Aufgabe5 from '../views/Pages/Aufgabe5.vue'
import Aufgabe6 from '../views/Pages/Aufgabe6.vue'
import Aufgabe7 from '../views/Pages/Aufgabe7.vue'
import Aufgabe8 from '../views/Pages/Aufgabe8.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aufgabe1',
      name: 'Aufgabe 1',
      component: Aufgabe1,
    },
    {
      path: '/aufgabe2',
      name: 'Aufgabe 2',
      component: Aufgabe2,
    },
    {
      path: '/aufgabe3',
      name: 'Aufgabe 3',
      component: Aufgabe3,
    },
    {
      path: '/aufgabe4',
      name: 'Aufgabe 4',
      component: Aufgabe4,
    },
    {
      path: '/aufgabe5',
      name: 'Aufgabe 5',
      component: Aufgabe5,
    },
    {
      path: '/aufgabe6',
      name: 'Aufgabe 6',
      component: Aufgabe6,
    },
    {
      path: '/aufgabe7',
      name: 'Aufgabe 7',
      component: Aufgabe7,
    },
    {
      path: '/aufgabe8',
      name: 'Aufgabe 8',
      component: Aufgabe8,
    },
  ]
})

export default router
