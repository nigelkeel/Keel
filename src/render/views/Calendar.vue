<template>
  <div class="cal main">
    <h1>日历</h1>
    <el-card>
      <!-- 日历 -->
      <el-calendar v-model="value" >
        <template #dateCell="{data}">
          <div @click="showDrawer(data)">
            <!-- 时间 -->
            <span style="font-size: 30px">{{data.day.slice(8)}}</span>
            <!-- 年初标记 -->
            <el-tag v-if="data.date.getMonth()===0&&data.date.getDate()===1">{{data.date.getFullYear()}}年</el-tag>
            <!-- 月初标记 -->
            <el-tag v-if="data.day.slice(8)=='01'">{{data.date.getMonth()+1}}月</el-tag>
          </div>
        </template>
      </el-calendar>
    </el-card>
    <!-- 抽屉 -->
    <el-drawer v-model="drawer" :with-header="false">
      <span>{{message}}</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      value: new Date(),
      drawer: false,
      message: "",
    };
  },
  methods: {
    // 打开抽屉
    showDrawer (date) {
      this.drawer = true
      this.message = date
    },
  },
};
</script>
<style lang="less">
  .cal {
    .el-tag {
      margin-right: 5px;
    }
  }
</style>
