<template>
  <div class="tools main">
    <h1>工具箱</h1>
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
  name: "Tools", 
  data() {
    return {
      config: [
        [
          { title: "工具箱", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
        ],
        [
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
          { title: "", link: "/tools", icon: ""},
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
  .tools {
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
