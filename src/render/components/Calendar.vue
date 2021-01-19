<template>
  <div class="app">
    <h1>我的日历模块</h1>
    <el-calendar  v-model="value"></el-calendar>
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
