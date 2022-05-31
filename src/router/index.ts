import home from '@/views/home/index.vue'
import mine from '@/views/mine/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router