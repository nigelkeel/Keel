<template>
  <div class="line main">
    <h1>社交中心</h1>
    <el-card></el-card>
  </div>
</template>
<script>
export default {
  name: "Line",
  data () {
    return {
      // 社交数据库
      amigos: {
        "云朋友": {
          name: "云朋友",
          level: 3,
        }
      }
    }
  },
};
</script>
<style scoped></style>