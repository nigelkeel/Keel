import { createApp } from 'vue'
import App from './App.vue'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')
import { store, isdev } from '/utils/index'

// 引入全局样式
import './index.css'
import './assets/css/reset.css'

// 引入 VueRouter
import VueRouter from "./router"

// 引入 Element-Plus
import ElementPlus from "element-plus"
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 引入 ECharts
import * as echarts from 'echarts'



// 引入 iconfont
import 'https://at.alicdn.com/t/font_2338321_xa5vsf6ll7b.js'

// console.log('ipcRenderer:', ipcRenderer)
// console.log('Store', store)
// console.log('electron is dev', isdev)

const app:any = createApp(App as any)

app.config.globalProperties.$echarts = echarts // 引入ECharts

app
.use(VueRouter)
.use(ElementPlus, { locale })
.mount('#app')
.$nextTick(window.ClosePreloadLoading)