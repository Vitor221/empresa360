import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Site from '@/views/Site.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Servico from '@/components/servicos/Servico.vue'
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
          { path: 'leads', component: Leads, name: 'leads' }, //localhost:8080/home/vendas/leads
          { path: 'leads/:id', component: Lead, name: 'lead' }, //localhost:8080/home/vendas/lead/id(5)
          { path: 'contratos', component: Contratos, name: 'contratos' },  //localhost:8080/home/vendas/contratos
          { path: '', component: VendasPadrao} //localhost:8080/home/vendas/vendas
        ]
      }, //localhost:8080/home/vendas
      { path: 'servicos', component: Servicos, name: 'servicos', children: 
                                                                  [
                                                                      { path: ':id', component: Servico, name: 'servico'}
                                                                  ]
      }, //localhost:8080/home/servicos
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