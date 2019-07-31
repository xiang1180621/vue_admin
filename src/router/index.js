import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

export default router
