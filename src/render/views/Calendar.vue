<template>
  <div class="app">
    <h1 style="height: 50px; font-size: 40px">日历</h1>
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
