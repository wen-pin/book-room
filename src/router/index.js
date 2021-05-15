import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views//Home/index.vue'
import SingleRoom from '../views/SingleRoom/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/room',
    name: 'room',
    component: SingleRoom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
