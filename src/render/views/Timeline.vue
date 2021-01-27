<template>
  <div class="timeline main">
    <h1>时间线</h1>
    <div class="boxer">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card>
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp">
                  {{activity.content}}
                </el-timeline-item>
              </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Timeline",
  data (){
    return {
      activities: [{
          content: '起床',
          timestamp: '07:30'
        }, {
          content: '打卡',
          timestamp: '09:30'
        }]
    }
  },
}
</script>