
import NotFound from './layouts/notFound'
import Landing from './layouts/landing'
import About from './layouts/about'
import Download from './layouts/download'

import Dashboard from './layouts/dashboard'
import MyFiles from './layouts/myfiles'
import Profile from './layouts/profile'

const main = [
  {
    path: '/',
    name: 'landing',
    component: Landing
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
    path: '/u',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/files',
    name: 'my files',
    component: MyFiles
  },
  {
    path: '/p',
    name: 'profile',
    component: Profile
  },
  {
    path: '/d/:id/:pass',
    name: 'download (with pass)',
    component: Download
  },
  {
    path: '/d/:id',
    name: 'download',
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
