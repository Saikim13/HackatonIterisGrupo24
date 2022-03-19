import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'
import EmpresaSelecionada from '../views/EmpresaSelecionada'
import PaginaDeCadastro from '../views/PaginaDeCadastro'
import PaginaLogin from '../views/PaginaLogin'
import CadastroVendedor from '../views/CadastroVendedor'
import QuantidadeEncomenda from '../views/QuantidadeEncomenda'
import EncomendaRealizada from '../views/EncomendaRealizada'
import AlertaCadastro from '../views/AlertaCadastro'
import EmpresaEncomenda from '../views/EmpresaEncomenda'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Vendedor',
    name: 'Vendedor',
    component: CadastroVendedor
  },
  {
    path: '/Ovos',
    name: 'ListaOvos',
    component: ListaOvos
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: PaginaDeCadastro
  },
  {
    path: '/Empresa/:id',      
    name: 'Empresa',      
    component: EmpresaSelecionada     
  },
  {
    path: '/Login',      
    name: 'PaginaLogin',      
    component: PaginaLogin    
  },
  {
    path: '/Quantidade/:id',      
    name: 'Quantidade',      
    component: QuantidadeEncomenda    
  },
  {
    path: '/Realizada/:id/:quantidade',      
    name: 'Realizada',      
    component: EncomendaRealizada},
    { 
    path: '/Alerta',      
    name: 'AlertaCadastro',      
    component: AlertaCadastro    
  },
  { 
    path: '/Encomendas',      
    name: 'Encomendas',      
    component: EmpresaEncomenda    
  },
]

const router = new VueRouter({
  routes
})

export default router
