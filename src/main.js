import 'core-js';
import "regenerator-runtime/runtime";

import regeneratorRuntime from "regenerator-runtime";

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import Vuelidate from 'vuelidate'

import {store} from './store.js'

Vue.use(VueRouter)

Vue.use(Vuelidate)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export {vm}
