import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'
import EmpresaSelecionada from '../views/EmpresaSelecionada'
import PaginaDeCadastro from '../views/PaginaDeCadastro'
import PaginaLogin from '../views/PaginaLogin'
import CadastroVendedor from '../views/CadastroVendedor'
<<<<<<< HEAD
import QuantidadeEncomenda from '../views/QuantidadeEncomenda'
import EncomendaRealizada from '../views/EncomendaRealizada'
=======
import AlertaCadastro from '../views/AlertaCadastro'
>>>>>>> c70bd8a8af8b31b94c47cff735907d6842c58b18

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
<<<<<<< HEAD
    path: '/Quantidade/:id',      
    name: 'Quantidade',      
    component: QuantidadeEncomenda    
  },
  {
    path: '/Realizada/:id/:quantidade',      
    name: 'Realizada',      
    component: EncomendaRealizada    
=======
    path: '/Alerta',      
    name: 'AlertaCadastro',      
    component: AlertaCadastro    
>>>>>>> c70bd8a8af8b31b94c47cff735907d6842c58b18
  }
]

const router = new VueRouter({
  routes
})

export default router
