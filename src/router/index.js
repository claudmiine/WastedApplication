import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
      path: '*',
      redirect: '/home',
      component: HomeView
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/landingpage',
      name: 'landingpage',

      component: () => import('../views/LandingPageView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
      requiresAuth: true
      },
      component: () => import('../views/RegisterView.vue')
      
    },
  ]
});

router.beforeEach((to, from, next ) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth && !currentUser ) next('login');
  else if (!requiresAuth && currentUser ) next('landingpage');
  else next();
});

export default router
