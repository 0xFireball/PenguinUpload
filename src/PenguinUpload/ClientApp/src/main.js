import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

// app
import App from './App.vue'

// routes
import routes from './routes'

// store
import store from './store/index'

// ui styles

import './stylus/main.styl'

// register plugins
Vue.use(VueRouter)
Vue.use(Vuetify)

// router setup
let router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.is_logged_in) {
      next({
        path: '/login',
        query: { r: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

let PenguinUploadApp = Vue.component('app', App)

const app = new PenguinUploadApp({
  el: '#app',
  router,
  store
})
