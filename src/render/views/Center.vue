<template>
  <div class="center">
    <h1 style="height: 60px; font-size: 40px">个人中心</h1>
    <div>
      <!-- 第一行 -->
      <el-row>
        <!-- 当前时间 -->
        <el-col :span="6" class="col">
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">
              <span>{{current.getHours().toString().padStart(2, '0')}}:</span>
              <span>{{current.getMinutes().toString().padStart(2, '0')}}:</span>
              <span>{{current.getSeconds().toString().padStart(2, '0')}}</span>
            </div>
            <div style="font-size: 16px">
              {{current.getFullYear()}}年{{current.getMonth()+1}}月{{current.getDate()}}日 星期{{getWeekday(current.getDay())}}
            </div>
          </el-card>
        </el-col>
        <!-- 人生多少天 -->
        <el-col :span="6" class="col">
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 提示 -->
            <el-tooltip placement="top" effect="light">
              <template #content>
                今天是人生的第{{lifeIndex}}天。
              </template>
              <!-- 数据显示 -->
              <div style="font-size: 30px">{{lifeIndex}}天</div>
            </el-tooltip>
          </el-card>
        </el-col>
        <!-- 位置和天气 -->
        <el-col :span="6" class="col">
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">{{city}}</div>
            <div style="font-size: 16px">{{weather}}</div>
          </el-card>
        </el-col>
        <!-- 成就点数 -->
        <el-col :span="6" class="col">
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">100</div>
            <div style="font-size: 16px">成就点</div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <!-- 健康 -->
        <el-col :span="6" class="col" >
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">90</div>
            <div style="font-size: 16px">健康指数</div>
          </el-card>
        </el-col>
        <!-- 发展 -->
        <el-col :span="6" class="col" >
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">90</div>
            <div style="font-size: 16px">发展指数</div>
          </el-card>
        </el-col>
        <!-- 幸福 -->
        <el-col :span="6" class="col" >
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">90</div>
            <div style="font-size: 16px">幸福指数</div>
          </el-card>
        </el-col>
        <!-- 积分 -->
        <el-col :span="6" class="col" >
          <el-card :body-style="{ padding: '10px' }" style="width:250px">
            <!-- 数据显示 -->
            <div style="font-size: 30px">1024</div>
            <div style="font-size: 16px">秩序点数</div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row class="echarts">
        <el-col :span="24" class="col">
          <el-card :body-style="{ padding: '10px' }" style="padding-right: 5px">
            <div id="echarts" style="width: 900px; height:300px;"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
/*
  Center | 个人中心
  created: 2021.01.20
*/

export default {
  name: "Center",
  data () {
    return {
      current: new Date(),
      lifeIndex: 0, 
      birthday: '1996-01-01',
      city: '深圳',
      weather: '多云 / 16℃ '
    }
  },
  created () {
    // 获取初始数据
    const initData = this.$store.get('user')
    if (initData) this.birthday = initData.birthday
    // 定期更新时间
    const updateTimer = setInterval(()=>{
      this.current = new Date()
      this.computedLifeIndex()
    }, 100)
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    // 计算人生多少天
    computedLifeIndex () {
      const birthTime = Date.parse(new Date(this.birthday))
      const nowTime = Date.now()
      this.lifeIndex =  parseInt((nowTime - birthTime)/(1000*60*60*24))
    },
    // 把星期转换成中文形式（Vue 3居然删了过滤器）
    getWeekday (value) {
      const CN = "一二三四五六日"
      return CN[value-1]
    },
    // 绘制图表
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        visualMap: {
            show: false,
            min: 0,
            max: 5000
        },
        calendar: {
            range: '2021',
            cellSize: [15, 18],
        },
        color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: this.getVirtualData(2021),
        }
      });
    },
    getVirtualData(year) {
      year = year || '2017';
      var date = +this.$echarts.number.parseDate(year + '-01-01');
      var end = +this.$echarts.number.parseDate(year + '-07-20');
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time <= end; time += dayTime) {
          data.push([
              this.$echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
          ]);
      }
      return data;
    }
  }, 
};
</script>
<style lang="less">
  .center {
    .col {
      padding: 5px;
    }
    .el-card {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .echarts {
      .el-card {
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
</style>
