import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'
import LandingView from '../views/LandingView.vue'
// import RosterView from '../views/RosterView.vue'



Vue.use(VueRouter)



const routes = [
  {
    // Public page
    path: '/',
    name: 'landing',
    component: LandingView,
    meta: {
      requiresAuth: false
    }
  },
  {
    // Public page
    path: '/login',
    name: 'login',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/LoginView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    // Public page
    path: '/register',
    name: 'register',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/RegisterView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/league-portal/', // Add in the :managerId for dynamic route matching
    name: 'league-portal',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/LeaguePortalView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/league/', // Add dynamic route naming and put as child to league-portal/
    name: 'league',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/LeagueView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/draftboard/', // Add dynamic route naming and put as child to league-portal/
    name: 'draftboard',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/DraftBoardView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]



// beforeEnter: (to, from, next) => {
//   // ...
//   const store = useClientSignupStore
//   const user = store(user)
//   const cookie = cookies.get('sessionToken')
//   // console.log(cookie, user.isAuthorized)
//   if (!user.isAuthorized && !cookie) next({name: 'login'})
//   else next()
// }

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  
  // const setAuth = await store.getAuthentication
  // console.log(setAuth)
  // const isAuthenticated = store.isAuthenticated
  // console.log(isAuthenticated)
  const isAuthenticated = cookies.get('sessionToken')
  console.log(isAuthenticated)
  if (to.meta.requiresAuth == true && !isAuthenticated) {
      next({name: 'login'})
      } else {
          next()
      }
  
    }
)

export default router
