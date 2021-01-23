<template>
  <div class="cal main">
    <h1>日历</h1>
    <el-card>
      <!-- 日历 -->
      <el-calendar v-model="value" >
        <template #dateCell="{data}">
          <div @click="showDrawer(data.day)">
            <!-- 时间 -->
            <span style="font-size: 30px; font-weight: 666; ">{{data.day.slice(8)}}</span>
            <!-- 年初标记 -->
            <el-tag type="danger" v-if="data.date.getMonth()===0&&data.date.getDate()===1">{{data.date.getFullYear()}}年</el-tag>
            <!-- 月初标记 -->
            <el-tag v-if="data.day.slice(8)=='01'">{{data.date.getMonth()+1}}月</el-tag>
            <!-- 节日标记 -->
            <el-tag type="info" v-if="festivalModern[data.day.slice(5, 10)]">{{festivalModern[data.day.slice(5, 10)]}}</el-tag>
            <el-tag type="info" v-if="festivalTradition[data.day]">{{festivalTradition[data.day]}}</el-tag>
          </div>
        </template>
      </el-calendar>
    </el-card>
    <!-- 抽屉 -->
    <el-drawer v-model="drawer" :with-header="false">
      <h2>{{message}}</h2>
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
      // 节日数据（现代节日）
      festivalModern: {
        "01-01": "元旦",
        "02-14": "情人节",
        "05-01": "劳动节",
        "10-01": "国庆节",
      },
      // 节日数据（传统，2021年，临时，待引入农历相关插件）
      festivalTradition: {
        "2021-02-11": "除夕",
        "2021-02-12": "春节",
      },
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
      margin: 0px 3px;
    }
  }
</style>
