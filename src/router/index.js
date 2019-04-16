import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/work',
      name: 'work',
      component: Projects
    },
    {
      path: '/contactme',
      name: 'Contactme',
      component: Contact
    },
  ]
})
