<template>
  <div>
    <!-- <Calendar /> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'App',
  components: {
    Calendar,
  },
}
</script>

<style lang="less">
#app {
  display: flex;
  width: 100%;
  justify-content: center;
  h1 {
    font: 24px;
  }
}
</style>
