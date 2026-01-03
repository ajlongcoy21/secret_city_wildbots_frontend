import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import Topbar from '@/layouts/topbar/Topbar.vue'

// Import Views
import TeamView from '../views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: TeamView,
        Topbar: Topbar
      },
    },
  ],
})

export default router
