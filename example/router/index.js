import Vue from 'vue'
import Router from 'vue-router'
import childrenList from './children'
Vue.use(Router)

const Layout = resolve => require(['../components/Layout'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loon-ui',
      component: Layout,
      redirect: '/button',
      children: childrenList
    }
  ]
})
