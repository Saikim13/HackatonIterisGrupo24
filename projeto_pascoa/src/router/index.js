import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'
import EmpresaSelecionada from '../views/EmpresaSelecionada'
import PaginaDeCadastro from '../views/PaginaDeCadastro'
import PaginaLogin from '../views/PaginaLogin'
import CadastroVendedor from '../views/CadastroVendedor'

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
]

const router = new VueRouter({
  routes
})

export default router
