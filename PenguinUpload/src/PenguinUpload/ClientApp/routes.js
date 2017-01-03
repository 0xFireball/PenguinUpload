
import Dashboard from './layouts/dashboard'
import NotFound from './layouts/notFound'
import Landing from './layouts/landing'
import About from './layouts/about'
import Download from './layouts/download'

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
  },
  {
    path: '/d/:id',
    name: 'Download',
    component: Download
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
