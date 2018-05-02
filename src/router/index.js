import Vue from 'vue'
import Router from 'vue-router'
import Notifications from '@/components/Notifications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notifications',
      component: Notifications
    }
  ]
})
