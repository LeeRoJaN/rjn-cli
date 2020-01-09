import Vue from 'vue'
import Router from 'vue-router'

const activityName = require("../../config/activity.name.js");

Vue.use(Router)

const vueRouter = new Router({
  mode: 'history',
  base: '/' + activityName.name,
  routes: [{
    path: '/',
    redirect: '/login/:channelId?/',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录页面',
      isNeedLogin: false //设置页面是否为需要登录之后才能跳�
    }
  },
  {
    path: '/login/:channelId?/',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录页面',
      isNeedLogin: false
    }
  },
  {
    path: '*',
    redirect: '/login/:channelId?'
  }
  ]
})


vueRouter.beforeEach((to, from, next) => {
 
  next()
  // document.title = to.meta.title;

})

export default vueRouter;
