<template>
  <div class="money main">
    <h1>资金管理</h1>
    <div class="boxer">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card>
            <h2>余额债务</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>收支记录</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>预算管理</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>投资理财</h2>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Money",
  data () {
    return {
      // 支出类别
      spendingType: [
        "饮食",
        "交通",
        "日用",
        "关系",
      ]
    }
  },
};
</script>