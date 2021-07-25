import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Stock from '../components/stock/list.vue'

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/', 
      component: Home
    },
    {
      name: 'stock',
      path: '/stock', 
      component: Stock, 
    }
  ]
})