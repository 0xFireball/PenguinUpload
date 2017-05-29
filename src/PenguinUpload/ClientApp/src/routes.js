
import Landing from './pages/Landing.vue'
import About from './pages/About.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Logout from './pages/Logout.vue'
import Account from './pages/Account.vue'
import Dashboard from './pages/Dashboard.vue'
import Files from './pages/Files.vue'

const main = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/d',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/u',
    name: 'account',
    component: Account,
    meta: { requiresAuth: true }
  },
  {
    path: '/f',
    name: 'files',
    component: Files,
    meta: { requiresAuth: true }
  }
]

const error = [
//   {
//     path: '*',
//     name: 'error',
//     component: NotFound
//   }
]

export default [].concat(main, error)
