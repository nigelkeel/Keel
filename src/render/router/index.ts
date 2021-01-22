// 路由配置文件
import { createRouter, createWebHistory } from "vue-router"

import Apps from "/views/Apps.vue"
import Setting from "/views/Setting.vue"
import Tree from "/views/Tree.vue"
import Cal from "/views/Calendar.vue"
import Today from "/views/Today.vue"
import Line from "/views/Line.vue"

const routes:any =  [
  { path: "/", component: Apps },
  { path: "/setting", component: Setting },
  { path: "/tree", component: Tree },
  { path: "/cal", component: Cal },
  { path: "/today", component: Today },
  { path: "/line", component: Line },
]

export default createRouter({
  history: createWebHistory(), 
  routes
})