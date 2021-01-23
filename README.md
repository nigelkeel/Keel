# 基于 Electron + Vue3 的个人管理系统

> Powered by KEEL



## 技术栈

- `Electron 9` 
- `electron-builder`
- `Vue 3.x`
- `Vite`
- `Vue Router 4.x`
- `TypeScript`
- `Element Plus`
- `echarts 5.x`
- `Less`



## 目录结构

组件目录 `src/render/views`

- 模块中心 `Apps`
- 个人中心 `Center`
- 设置中心 `Setting`
- 日历 `Cal`
- 今日 `Today`
- 社交中心 `Line`
- 任务中心 `Tasks`

## 数据结构

`days` 日数据对象

`amigo` 社交数据对象



## 开发日志

后续

- 自定义背景
- 无边框带来的控制条消失问题
- 打包出现的问题：图标丢失（后期更改为本地引入）
- 表单验证
- 数据库
- 深拷贝，直接用lodash

### v0.13

- 新增收支管理模块

### v0.12

- 日历模块增加一些节日标记数据
- 任务模块新建任务
- 新建任务和编辑任务使用同一个对话框

### v0.11

- 新增社交中心模块（`Line`）
- 新增任务中心模块（`Tasks`）

### v0.10

- 全局调整布局，引入全局调色板
- 更新每日模块

### v0.9

- 新增世界树（`Tree`） 
- 新增今日（`Today` ）
- 日历模块增加抽屉
- 调整分辨率为 `1920 x 1820`

### v0.8

- 新增设置中心 （`Setting`） 开发中
- 使用 `electron-store` 进行数据管理
- `day.js` 本地化
- 新建 `element-reset.less` 文件

### v0.7

- 修复 `ElementPlus` 默认语言不是中文的问题

- 修复无边框带来的无法点击问题   

  > 罪魁祸首 `-webkit-app-region: drag`

- 引入 `echarts`

  `npm i -S echarts`

- 新增模块中心（`Apps`）  

### v0.6

- 调整布局
- 个人中心：新增城市和天气

### v0.5

- 新增个人中心（Center）
- 个人中心：新增当前时间
- 个人中心：新增人生第几天
- 引入 `iconfont`

### v0.4

- 引入 `vue-router@4.x`

  > `npm i vue-router@4`
  >
  > 新建相关目录和文件，并在 `render/main.ts` 中引入

### v0.3

- 去掉顶部菜单

- 增加两个快捷键作为刷新和打开控制台

  > `npm i -D electron-debug@1.5.0`
  >
  > `npm i -D electron-devtools-installer@2.2.4`
  >
  > 注册 `F5` 为刷新快捷键
  >
  > 注册 `F6` 为调试台快捷键（不知道为啥，`F12`一直用不了）
  >
  > 后期再加仅开发环境启用

- 尝试打包出来安装包

  > `npm run build` | 在 `Windows` 系统
  >
  > 下载 [electron-v9.1.0-win32-x64](https://github.com/electron/electron/releases/download/v9.1.0/electron-v9.1.0-win32-x64.zip) 放在 `C:\Users\你的名字\AppData\Local\electron`
  >
  > 下载 [winCodeSign-2.6.0.7z](https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z) 解压放在 `C:\Users\你的名字\AppData\Local\electron-builder\Cache\winCodeSign`
  >
  > 下载 [nsis-3.0.4.1.7z](https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z) 解压放在 `C:\Users\你的名字\AppData\Local\electron-builder\Cache\nsis`
  >
  > 下载 [nsis-resources-3.4.1.7z](https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z) 解压放在 `C:\Users\你的名字\AppData\Local\electron-builder\Cache\nsis`

### v0.2

- 引入 `Less` 

  > `npm i -D less less-loader`

- 引入 `Element Plus` 

  > 这里要使用原版镜像 `npm config set registry https://registry.npmjs.org`
  >
  > `npm i -S element-plus`
  >
  > 并在 `render/main.ts` 中进行完整引入（注意要引入样式）

### v0.1

- 增加版本控制

- 搭建基本项目结构，参考 [electron-vue-vite](https://github.com/caoxiemeihao/electron-vue-vite)

  > `npm i -g create-vite-app@1.12.0`

- `npm i` 之后尝试运行