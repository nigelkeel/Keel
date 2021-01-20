<template>
  <div>
    <el-container>
      <!-- 侧 -->
      <el-aside width="100px">
        <!-- 图标 -->
          <div class="icons">
            <svg class="icon" aria-hidden="true" style="width: 40px; height: 40px; ">
              <use xlink:href="#icon-time"></use>
            </svg>  
          </div>
          <!-- 按钮 -->
          <div class="tabs">
            <el-button circle v-for="i in 3" :key="i" @click="pageMode=1">
              <svg class="icon" aria-hidden="true" style="width: 33px; height: 33px; ">
                <use xlink:href="#icon-app"></use>
              </svg>  
            </el-button>
            <el-button circle @click="pageMode=0">
              <svg class="icon" aria-hidden="true" style="width: 33px; height: 33px; ">
                <use xlink:href="#icon-setting"></use>
              </svg>  
            </el-button>
          </div>
      </el-aside>
      <!-- 主 -->
      <el-main>
        <Center v-if="pageMode===0"></Center>
        <div v-else>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Center from '/views/Center.vue'

export default {
  name: 'App',
  components: {
    Center,
  },
  data () {
    return {
      pageMode: 0,  // 窗口状态
    }
  },
}
</script>

<style lang="less">
#app {
  .el-container {
    width: 100vw;
    height: 100vh;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100vh;
    .icons {
      width: 60px; 
      height: 60px; 
      line-height: 60px;
      margin: 20px auto;
      display: flex; 
      align-items: center; 
      justify-content: center;
      text-align: center;
      border-radius: 50%;
    }
    .tabs {
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center;
      margin-top: 100px;
      .el-button {
        display: flex; 
        align-items: center; 
        justify-content: center;
        background-color: #D3DCE6;
        margin-top: 30px;
      }
      .el-button + .el-button, .el-checkbox.is-bordered + .el-checkbox.is-bordered {
        margin-left: 0px;
      }
    }
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100vh;
  }
}
</style>
