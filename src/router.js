import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Member from '@/views/Member'
import Cart from '@/views/Cart'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/member', name: 'member', component: Member },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/search', name: 'search', component: Search }
  ],
  linkActiveClass: 'active'
})
