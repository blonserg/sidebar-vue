import { RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/tasks',
    component: () => import('@/views/Tasks.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
  },
]

export default routes
