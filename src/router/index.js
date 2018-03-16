import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/home'

Vue.use(Router)

export default new Router({
  modal:"hash",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
