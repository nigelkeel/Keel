<template>
  <div class="apps">
    <h1 style="height: 60px; font-size: 40px">应用中心</h1>
    <el-row v-for="(row, y) in 7" :key="y">
      <el-col :span="3" v-for="(col, x) in 8" :key="x">
        <el-card :style="config[y][x].title ? '' : 'visibility: hidden;'" @click="jump(config[y][x].link)">
          <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px; color: #666">
            <use xlink:href="#icon-app"></use>
          </svg> 
          <el-tooltip v-if="config[y][x].desc" effect="light">
            <template #content>
              {{config[y][x].desc}}
            </template>
            <div>{{config[y][x].title||"此处暂无"}}</div> 
          </el-tooltip>
          <div v-else>{{config[y][x].title||"此处暂无"}}</div> 
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Apps", 
  data() {
    return {
      config: null,
    }
  },
  created() {
    // 数据配置
    this.config = new Array(8)
    for(let i=0; i<this.config.length; i++) {
      this.config[i] = new Array(8)
      for(let j=0; j<this.config[i].length; j++) {
        this.config[i][j] = { title: "", link: "", icon: "", desc: ""}
      }
    }
    this.config[0][0] = { title: "世界树", link: "/tree", icon: "", desc: "我的世界树。"}
    this.config[0][1] = { title: "个人中心", link: "/center", icon: "", desc: "我的个人中心。"}
    this.config[1][0] = { title: "今日", link: "/today", icon: "", desc: "我的一天。"}
    this.config[1][1] = { title: "日历", link: "/cal", icon: "", desc: "我的日历。"}
    this.config[2][0] = { title: "设置中心", link: "/setting", icon: "", desc: "设置中心。"}
  },
  methods: {
    jump (link) {
      if (!link) return
      switch (link) {
        case '/center': 
          this.$emit('changePageMode', 1)
          break
        default: 
          this.$emit('changePageMode', 2)
          this.$router.replace(link)
          break
      }
    }
  },
};
</script>
<style lang="less">
  .apps {
    .el-col {
      padding: 5px;
    }
    .el-card {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: -16px;
      }
      div {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 10px; 
        font-size: 14px;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
</style>
