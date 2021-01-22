<template>
  <div class="tree main">
    <h1>世界树</h1>
    <el-card>
      <div id="charts-tree" style="width: 1200px; height: 800px"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      data: {
        name: "世界树",
        children: [
          {
            name: "核心",
          },
          {
            name: "秩序",
          },
          {
            name: "日常",
            children: [
              { name: "健康中心", value: "health" },
            ],
          },
          {
            name: "知识",
          },
          {
            name: "发展",
          },
          {
            name: "连接",
          },
          {
            name: "爱好",
          },
        ],
      },
    };
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    // 绘制图表
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById("charts-tree"));
      chart.setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            id: 0,
            name: "tree1",
            data: [this.data],
            top: "10%",
            left: "8%",
            bottom: "22%",
            right: "20%",
            symbolSize: 7,
            edgeShape: "polyline",
            edgeForkPosition: "63%",
            initialTreeDepth: 3,
            lineStyle: {
              width: 2,
            },
            label: {
              backgroundColor: "#fff",
              position: "left",
              verticalAlign: "middle",
              align: "right",
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },
            expandAndCollapse: true,
            animationDuration: 550,
          },
        ],
      });
    },
  },
};
</script>
<style scoped></style>
