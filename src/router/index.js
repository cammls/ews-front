import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import myExports from '@/views/myExports'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!store.getters.isLogged) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters.isLogged) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mes-exports',
      name: 'myExports',
      component: myExports
    }
  ]
})
