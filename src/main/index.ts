// 主进程主文件
import { join } from 'path'
import { app, BrowserWindow, Menu, globalShortcut } from 'electron'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

let win: BrowserWindow

function createWin() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    // frame: false, // 隐藏边框
    titleBarStyle: 'customButtonsOnHover',
    webPreferences: {
      // 关闭同源策略
      webSecurity: false,
      nodeIntegration: true,
      preload: join(__dirname, '../preload/index.js'),
    },
  })

  // 隐藏顶部菜单
  Menu.setApplicationMenu(null)

  // 注册快捷键
  globalShortcut.register('F6', () => {
    let win = BrowserWindow.getFocusedWindow()
    win?.webContents.openDevTools() // 打开开发工具
  })
  globalShortcut.register('F5', () => {
    let win = BrowserWindow.getFocusedWindow()
    win?.reload() // 刷新
  })
  app.on('will-quit', () => {
    globalShortcut?.unregisterAll()
  })

  const URL = is_dev
    ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
    : `file://${join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址

  win?.loadURL(URL)
}

app.whenReady().then(createWin)
