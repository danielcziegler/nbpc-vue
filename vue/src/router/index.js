import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: ['/about'],
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news-events',
    name: 'feed',
    component: () => import(/* webpackChunkName: "feed" */ '../views/Feed.vue')
  },
  {
    path: '/councillors',
    name: 'councillors',
    component: () =>
      import(/* webpackChunkName: "councillors" */ '../views/Councillors.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () =>
      import(/* webpackChunkName: "staff" */ '../views/Staff.vue')
  },
  {
    path: '/report-an-issue',
    name: 'report',
    component: () =>
      import(/* webpackChunkName: "report" */ '../views/Report.vue')
  },
  {
    path: '/policies-guides-docs',
    name: 'policies',
    component: () =>
      import(/* webpackChunkName: "policies" */ '../views/Policies.vue')
  },
  {
    path: '/newsletters',
    name: 'newsletters',
    component: () =>
      import(/* webpackChunkName: "newsletters" */ '../views/Newsletters.vue')
  },
  {
    path: '/allotments',
    name: 'allotments',
    component: () =>
      import(/* webpackChunkName: "allotments" */ '../views/Allotments.vue')
  },
  {
    path: '/coronavirus',
    name: 'coronavirus',
    component: () =>
      import(/* webpackChunkName: "coronavirus" */ '../views/Coronavirus.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
