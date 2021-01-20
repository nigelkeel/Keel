<template>
  <div class="center">
    <h1>个人中心</h1>
    <div>
      <el-row>
        <!-- 当前时间 -->
        <el-col :span="12" style="padding: 5px;" >
          <el-card :body-style="{ padding: '10px' }" style="width:190px">
            <!-- 图标 -->
            <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px; padding-bottom: 10px">
              <use xlink:href="#icon-time1"></use>
            </svg>
            <!-- 数据显示 -->
            <div style="font-size: 16px">{{current.getFullYear()}}年{{current.getMonth()+1}}月{{current.getDate()}}日 星期{{getWeekday(current.getDay())}}</div>
            <div style="font-size: 30px">{{current.getHours().toString().padStart(2, '0')}}:{{current.getMinutes().toString().padStart(2, '0')}}:{{current.getSeconds().toString().padStart(2, '0')}}</div>
          </el-card>
        </el-col>
        <!-- 人生多少天 -->
        <el-col :span="12" style="padding: 5px;" >
          <el-card :body-style="{ padding: '10px' }" style="width:190px">
            <!-- 图标 -->
            <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px; padding-bottom: 10px">
              <use xlink:href="#icon-time"></use>
            </svg>
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
    }
  },
  created () {
    // 定期更新时间
    const updateTimer = setInterval(()=>{
      this.current = new Date()
      this.computedLifeIndex()
    }, 100)
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
    }
  }, 
};
</script>
<style lang="less">
  .center {
    .el-card {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
