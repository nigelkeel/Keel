<template>
  <div class="app">
    <h1 style="height: 60px; font-size: 40px">日历</h1>
    <el-card>
      <el-calendar  v-model="value"></el-calendar>
    </el-card>
  </div>
</template>
<script>

export default {
  name: 'Calendar',
  data() {
    return {
      value: new Date()
    }
  } 
}
</script>
