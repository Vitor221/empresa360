import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/', //localhost:8080/
    component: Site
  },
  {
    path: '/home', //localhost:8080/home
    component: Home,
    children: [
      { path: 'vendas', component: Vendas, children: 
        [
          { path: 'leads', component: Leads }, //localhost:8080/home/vendas/leads
          { path: 'leads/:id', component: Lead }, //localhost:8080/home/vendas/lead/id(5)
          { path: 'contratos', component: Contratos }  //localhost:8080/home/vendas/contratos
        ]
      }, //localhost:8080/home/vendas
      { path: 'servicos', component: Servicos}, //localhost:8080/home/servicos
      { path: 'dashboard', component: Dashboard}
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