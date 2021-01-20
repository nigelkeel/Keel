import { createApp } from 'vue'
import App from './App.vue'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')
import { store, isdev } from '/utils/index'

import './index.css'

// 引入 VueRouter
import VueRouter from "./router"

// 引入 Element-Plus
import ElementPlus from "element-plus"
import 'element-plus/lib/theme-chalk/index.css';

// 引入 iconfont
import "https://at.alicdn.com/t/font_2338321_cps0vl5dip9.js"

// console.log('ipcRenderer:', ipcRenderer)
// console.log('Store', store)
// console.log('electron is dev', isdev)

createApp(App as any)
.use(VueRouter)
.use(ElementPlus)
.mount('#app')
.$nextTick(window.ClosePreloadLoading)
