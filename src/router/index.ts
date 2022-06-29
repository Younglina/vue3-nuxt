import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home/index.vue'
import mine from '@/views/mine/index.vue'
import login from '@/views/login/index.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      keepAlive: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
