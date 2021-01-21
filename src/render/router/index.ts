// 路由配置文件
import { createRouter, createWebHistory } from "vue-router"

import Apps from "/views/Apps.vue"
import Setting from "/views/Setting.vue"
import Cal from "/views/Calendar.vue"

const routes:any =  [
  { path: "/", component: Apps },
  { path: "/setting", component: Setting },
  { path: "/cal", component: Cal },
]

export default createRouter({
  history: createWebHistory(), 
  routes
})