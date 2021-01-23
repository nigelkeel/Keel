// 路由配置文件
import { createRouter, createWebHistory } from 'vue-router'

const routes:any =  [
  { path: '/', component: import('/views/App.vue') },
  { path: '/setting', component: import('/views/Setting.vue') },
  { path: '/tree', component: import('/views/Tree.vue') },
  { path: '/cal', component: import('/views/Calendar.vue') },
  { path: '/today', component: import('/views/Today.vue') },
  { path: '/line', component: import('/views/Line.vue') },
  { path: '/tasks', component: import('/views/Tasks.vue') },
  { path: '/money', component: import('/views/Money.vue') },
]

export default createRouter({
  history: createWebHistory(), 
  routes
})