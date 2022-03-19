import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaOvos from '../views/ListaOvos'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
