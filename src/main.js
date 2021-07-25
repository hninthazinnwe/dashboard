import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.use(Vuex) 
 
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})