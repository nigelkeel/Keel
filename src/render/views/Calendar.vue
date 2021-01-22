<template>
  <div class="app">
    <h1 style="height: 60px; font-size: 40px">日历</h1>
    <el-card>
      <el-calendar v-model="value" @click="showDrawer=true"></el-calendar>
    </el-card>
    <!-- 抽屉 -->
    <el-drawer title="我是标题" v-model="showDrawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  data() {
    return {
      value: new Date(),
      showDrawer: false,
    };
  },
};
</script>
