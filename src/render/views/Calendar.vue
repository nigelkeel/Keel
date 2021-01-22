<template>
  <div class="cal main">
    <h1>日历</h1>
    <el-card>
      <!-- 日历 -->
      <el-calendar v-model="value" >
        <template #dateCell="{data}">
          <div @click="showDrawer(data)">
            {{data.day.slice(8)}}
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
</style>
