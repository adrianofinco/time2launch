import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/time2launch/', component: Home, meta: { title: 'Time2Launch' } },
  { path: ':path(.*)', component: NotFound },
]
