
import ShrinkPlace from './layouts/shrinkPlace'
import StatsPlace from './layouts/statsPlace'
import NotFound from './layouts/notFound'

const main = [
  {
    path: '/',
    name: 'landing',
    component: ShrinkPlace
  },
  {
    path: '/s/:sroute',
    name: 'statsview',
    component: StatsPlace
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
