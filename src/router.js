import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'

const routes = [
  {
    path: '/', //localhost:8080/
    component: Site
  },
  {
    path: '/home', //localhost:8080/home
    component: Home,
    children: [
      { path: 'vendas', component: Vendas }, //localhost:8080/home/vendas
      { path: 'servicos', component: Servicos} //localhost:8080/home/servicos
    ]
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