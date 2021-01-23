<template>
  <div class="tree main">
    <h1>世界树</h1>
    <el-card>
      <el-button @click="isEditState = true">编辑</el-button>
      <div id="charts-tree" style="width: 1200px; height: 800px"></div>
    </el-card>
    <!-- 编辑对话框 -->
    <el-dialog
      title="编辑世界树"
      v-model="isEditState"
      width="40%"
      @close="this.reload()"
    >
      <el-tree
        :data="data.children"
        node-key="value"
        :props="{ label: 'name', children: 'children'}"
        draggable>
      </el-tree>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Tree",
  inject: ['reload'], 
  data() {
    return {
      isEditState: false, 
      data: {
        name: "世界树",
        value: "root",
        children: [],
      },
    };
  },
  created () {
    // 获取世界树数据
    const result = this.$store.get('tree')
    if (result) this.data = result
  },
  mounted () {
    this.drawCharts();
  },
  watch: {
    data: {
      handler (newData, oldData) {
        this.$store.set('tree', newData)
      },
      deep: true
    }
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
