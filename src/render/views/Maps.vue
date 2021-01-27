<template>
  <div class="maps main">
    <h1>地图</h1>
    <el-card id="container">
      <!-- <div class="boxer" id="container"></div> -->
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Maps",
  mounted (){
    this.init()
  },
  methods: {
    init() {
      var map = new AMap.Map("container");
      window.map = map;
    }
  }
};
</script>
<style lang="less"></style>
