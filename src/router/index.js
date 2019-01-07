import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: "/custorm",
      component: resolve => require(['@/components/main'], resolve),
      children:[
        {
          path: '/usher',
          name: 'usher',
          component: resolve => require(['@/pages/usherFunc/usher'], resolve)//迎宾功能
        },
        {
          path: '/custorm',
          name: 'custorm',
          component: resolve => require(['@/pages/custormManage/custorm'], resolve)//客房管理
        },
      ]
    },
   
  ]
})



// if (sessionStorage.getItem('token')) {
//   store.commit('setToken', sessionStorage.getItem('token'))
// }
