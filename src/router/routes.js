
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/about', component: () => import('pages/AboutUs.vue') },
      { path: '/testsheet', component: () => import('pages/TestSheet.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/thankyou', component: () => import('pages/ThankYou.vue') },
      { path: '/account', component: () => import('pages/Account.vue') },
      { path: '/auth', component: () => import('pages/AuthPage.vue') },
      { path: '/login', component: () => import('pages/SignIn.vue') },
      { path: '/signup', component: () => import('pages/SignUp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
