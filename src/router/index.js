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
    path: '/SingleRoom',
    name: '單人床啊ㄖㄚ安安安安安安 ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/SingleRoom.vue'),
    component: SingleRoom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
