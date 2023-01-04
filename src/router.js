import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import indexUser from './pages/users/indexUser.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/users', name: 'users', component: indexUser }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
