
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/portfolio', component: () => import('pages/Portfolio.vue') },
      { path: '/roulette', component: () => import('pages/Roulette.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
