import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import Topbar from '@/layouts/topbar/Topbar.vue'

// Import Views
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Topbar: Topbar
      },
    },
    {
      path: '/teams',
      name: 'teams',
      components: {
        default: TeamView,
        Topbar: Topbar
      },
    },
  ],
})

export default router
