import Vue from 'vue'
import VueRouter from 'vue-router'
// import cookies from 'vue-cookies'
import LeagueView from '../views/LeagueView.vue'
import LeaguePortalView from '../views/LeaguePortalView.vue'
import LandingView from '../views/LandingView.vue'
import DraftBoardView from '../views/DraftBoardView.vue'
import RegistrationView from '../views/RegistrationView.vue'
// import RosterView from '../views/RosterView.vue'


Vue.use(VueRouter)

// this.routes.beforeEach((to, from, next) => {
//   const isAuthenticated = cookies.get('sessionToken');
//   if (to.fullPath === '/league') {
//     if (!isAuthenticated) {
//           next('/registration')
//       } else {
//           next()
//       }
//     }
//     else if(to.fullPath === '/league-portal'){
//       if (!isAuthenticated) {
//         next('/')
//     } else {
//         next()
//     }
//     }
//     else if(to.fullPath === '/draft-board'){
//       if (!isAuthenticated) {
//         next('/')
//     } else {
//         next()
//     }
//     }
//     else{
//       next('/')
//     }
// })

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
    
  },
  {
    path: '/registration/',
    name: 'registration',
    component: RegistrationView,
    
  },
  {
    path: '/league-portal/',
    name: 'league-portal',
    component: LeaguePortalView,
    
  },
  {
    path: '/league/',
    name: 'league',
    component: LeagueView,
    
  },
  {
    path: '/draftboard/',
    name: 'draftboard',
    component: DraftBoardView,
    
  }
]



export const router = new VueRouter({
  routes
})

export default router
