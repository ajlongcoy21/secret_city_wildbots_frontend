import { createRouter, createWebHashHistory } from 'vue-router'

// Import Layouts
import Topbar from '@/layouts/topbar/Topbar.vue'

// Import Views
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import EventView from '../views/EventView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/team/:teamNumber/events',
      name: 'teamEvents',
      components: {
        default: EventView,
        Topbar: Topbar
      },
      props: true // pass teamNumber as prop
    },
    {
      path: '/events',
      name: 'events',
      components: {
        default: EventView,
        Topbar: Topbar
      },
    },
  ],
})

export default router
