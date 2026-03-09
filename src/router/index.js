import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/index.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router