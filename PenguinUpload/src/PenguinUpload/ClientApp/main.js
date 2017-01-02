// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'

// Routes
import routes from './routes'

// Styles/fonts
import './assets/styles/global.css'
import './assets/styles/material-icons.css'
import './assets/styles/normalize.css'
import './assets/styles/ffskeleton.css'

// material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// plugins
Vue.use(VueRouter)
Vue.use(VueMaterial)

// router config

let router = new VueRouter({
  routes
})

router.afterEach((currentRoute) => {
  let mainContent = document.querySelector('.main-content')

  if (mainContent) {
    mainContent.scrollTop = 0
  }
})

Vue.material.theme.registerAll({
  apptheme: {
    primary: 'teal',
    accent: 'cyan'
  }
})

import App from './App'

let YASApp = Vue.component('app', App)

/* eslint-disable no-unused-vars */
const app = new YASApp({
  el: '#app',
  router
})

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App />',
//   components: { App }
// })
