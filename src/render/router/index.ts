// 路由配置文件
import { createRouter, createWebHistory } from "vue-router"

import Cal from "/components/Calendar.vue"

const routes:any =  [
  { path: "/", component: Cal },
]

export default createRouter({
  history: createWebHistory(), 
  routes
})