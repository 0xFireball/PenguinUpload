
import Dashboard from './layouts/dashboard'
import NotFound from './layouts/notFound'
import Landing from './layouts/landing'
import About from './layouts/about'

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
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
