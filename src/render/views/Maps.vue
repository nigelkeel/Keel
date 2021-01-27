<template>
  <div class="maps main">
    <h1>地图</h1>
    <el-card >
      <div id="container" style="width: 88vw; height: 76vh"></div>
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
      var map = new AMap.Map("container", {
        zoom: 10, //默认的缩放级别
        // center: [116.397428, 39.90923], //中心点坐标
        // viewMode:'3D', //使用3D视图
      });
      map.setMapStyle('amap://styles/7bbfcf1f317256e306f370324e1167e0'); //设置样式
      // 添加一个标记
      var marker = new AMap.Marker({
          position:[114.39, 23.9], //位置
      })
      map.add(marker);//添加到地图
      window.map = map;
    }
  }
};
</script>
<style lang="less"></style>
