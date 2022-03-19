import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'
import EmpresaSelecionada from '../views/EmpresaSelecionada'
import PaginaDeCadastro from '../views/PaginaDeCadastro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ovos',
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
]

const router = new VueRouter({
  routes
})

export default router
