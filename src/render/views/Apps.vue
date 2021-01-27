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
            <div :style="config[y][x].link==='/' ? 'color: #ddd' : '' ">{{config[y][x].title||"此处暂无"}}</div> 
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
      config: [
        [
          { title: "世界树", link: "/tree", icon: ""},
          { title: "个人中心", link: "/center", icon: ""},
          { title: "设置中心", link: "/setting", icon: ""},
          { title: "思想管理", link: "/", icon: ""},
          { title: "想法箱", link: "/", icon: ""},
          { title: "规则", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
        ],
        [
          { title: "秩序中心", link: "/", icon: ""},
          { title: "今日", link: "/today", icon: ""},
          { title: "日历", link: "/cal", icon: ""},
          { title: "任务箱", link: "/tasks", icon: ""},
          { title: "计划中心", link: "/", icon: ""},
          { title: "时间线", link: "/timeline", icon: ""},
          { title: "日志管理", link: "/", icon: ""},
          { title: "积分中心", link: "/", icon: ""},
        ],
        [
          { title: "健康中心", link: "/", icon: ""},
          { title: "日常管理", link: "/", icon: ""},
          { title: "健身管理", link: "/", icon: ""},
          { title: "宅事务", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "理想生活实验室", link: "/", icon: ""},
          { title: "资金管理", link: "/money", icon: ""},
        ],
        [
          { title: "知识管理", link: "/", icon: ""},
          { title: "知识库", link: "/", icon: ""},
          { title: "课程", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
        ],
        [
          { title: "发展中心", link: "/", icon: ""},
          { title: "工作管理", link: "/", icon: ""},
          { title: "职业生涯", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "成就", link: "/", icon: ""},
        ],
        [
          { title: "社交中心", link: "/line", icon: ""},
          { title: "家庭", link: "/", icon: ""},
          { title: "亲密关系", link: "/", icon: ""},
          { title: "朋友", link: "/", icon: ""},
          { title: "社交媒体", link: "/", icon: ""},
          { title: "动态", link: "/", icon: ""},
          { title: "词库", link: "/", icon: ""},
          { title: "记忆碎片", link: "/", icon: ""},
        ],
        [
          { title: "爱好中心", link: "/", icon: ""},
          { title: "音乐", link: "/", icon: ""},
          { title: "阅读", link: "/", icon: ""},
          { title: "影视", link: "/", icon: ""},
          { title: "电子游戏", link: "/", icon: ""},
          { title: "幻想辞典", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "地图", link: "/Maps", icon: ""},
        ],
        [
          { title: "数据中心", link: "/", icon: ""},
          { title: "安全中心", link: "/", icon: ""},
          { title: "开发中心", link: "/", icon: ""},
          { title: "设备管理", link: "/", icon: ""},
          { title: "文件管理", link: "/", icon: ""},
          { title: "应用管理", link: "/", icon: ""},
          { title: "", link: "/", icon: ""},
          { title: "工具箱", link: "/tools", icon: ""},
        ],
      ],
    }
  },
  created() {
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
