import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'

const routes = [
  {
    path: '/', //localhost:8080/
    component: Site
  },
  {
    path: '/home', //localhost:8080/home
    component: Home
  },
  {
    path: '/login', //localhost:8080/login
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router