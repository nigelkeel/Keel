// 路由配置文件
import { createRouter, createWebHistory } from "vue-router"

import Apps from "/views/Apps.vue"
import Cal from "/views/Calendar.vue"

const routes:any =  [
  { path: "/", component: Apps },
  { path: "/cal", component: Cal },
]

export default createRouter({
  history: createWebHistory(), 
  routes
})