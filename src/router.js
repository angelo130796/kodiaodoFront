import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Enfermedad from './components/Enfermedad.vue'
import Signos from './components/Signos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/enfermedad',
      name: 'enfermedad',
      component: Enfermedad
    },
    {
      path: '/signos',
      name: 'signos',
      component: Signos
    }
  ]
})
