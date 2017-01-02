
import Dashboard from './layouts/dashboard'
import NotFound from './layouts/notFound'
import Landing from './layouts/landing'

const main = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/u',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    redirect: '/'
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: NotFound
  }
]

export default [].concat(main, error)
