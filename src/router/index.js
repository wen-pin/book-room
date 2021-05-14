import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views//Home/index.vue'
import SingleRoom from '../views/SingleRoom/index.vue'
import ClassicSingleRoom from '../views/ClassicSingleRoom/index.vue'
import DeluxeSingleRoom from '../views/DeluxeSingleRoom/index.vue'
import StandardTwinRoom from '../views/StandardTwinRoom/index.vue'
import ClassicTwinRoom from '../views/ClassicTwinRoom/index.vue'
import DeluxeTwinRoom from '../views/DeluxeTwinRoom/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/SingleRoom',
    name: '單人房',
    component: SingleRoom,
  },
  {
    path: '/ClassicSingleRoom',
    name: '經典單人房',
    component: ClassicSingleRoom,
  },
  {
    path: '/DeluxeSingleRoom',
    name: '豪華單人房',
    component: DeluxeSingleRoom,
  },
  {
    path: '/StandardTwinRoom',
    name: '標準雙人房',
    component: StandardTwinRoom,
  },
  {
    path: '/ClassicTwinRoom',
    name: '經典雙人房',
    component: ClassicTwinRoom,
  },
  {
    path: '/DeluxeTwinRoom',
    name: '豪華雙人房',
    component: DeluxeTwinRoom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
