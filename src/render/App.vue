<template>
  <div>
    <Center />
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Center from '/components/Center.vue'

export default {
  name: 'App',
  components: {
    Center,
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
