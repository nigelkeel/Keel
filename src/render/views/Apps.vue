<template>
  <div class="apps main">
    <h1>应用中心</h1>
    <div class="boxer">
      <el-row :gutter="10" v-for="(row, y) in 8" :key="y">
        <el-col :span="3" v-for="(col, x) in 8" :key="x">
          <el-card :style="config[y][x].title ? '' : 'visibility: hidden'" @click="jump(config[y][x].link)">
            <svg class="icon" aria-hidden="true" style="width: 20px; height: 20px; color: #666">
              <use xlink:href="#icon-app"></use>
            </svg> 
            <div>{{config[y][x].title||"此处暂无"}}</div> 
          </el-card>
        </el-col>
      </el-row>
    </div>
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
        this.config[i][j] = { title: "", link: "", icon: ""}
      }
    }
    this.config[0][0] = { title: "世界树", link: "/tree", icon: ""}
    this.config[0][1] = { title: "个人中心", link: "/center", icon: ""}
    this.config[1][0] = { title: "今日", link: "/today", icon: ""}
    this.config[1][1] = { title: "日历", link: "/cal", icon: ""}
    this.config[2][0] = { title: "设置中心", link: "/setting", icon: ""}
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
  @import "../assets/css/color.less";
  .apps {
    .el-col {
      padding-bottom: 10px;
    }
    .el-card {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      svg {
        margin-left: -24px;
      }
      div {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 10px; 
        font-size: 16px;
        font-weight: 666;
      }
      &:hover {
        color: #fff;
        background-color: @c1;
      }
    }
  }
</style>
