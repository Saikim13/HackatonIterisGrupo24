import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'
import EmpresaSelecionada from '../views/EmpresaSelecionada'
import PaginaDeCadastro from '../views/PaginaDeCadastro'
import PaginaLogin from '../views/PaginaLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Ovos',
    name: 'ListaOvos',
    component: ListaOvos
  },
  {
      path: '/Empresa',
      name: 'Empresa',
      component: EmpresaSelecionada
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
    }
]

const router = new VueRouter({
  routes
})

export default router
