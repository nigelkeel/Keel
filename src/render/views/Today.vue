<template>
  <div class="today">
    <h1 style="height: 60px; font-size: 40px">今日</h1>
    <el-card>
      <el-form>
        <!-- 日期 -->
        <el-form-item>
          <el-date-picker
            v-model="today.date"
            type="date"
            placeholder="选择日期"
            format="YYYY年MM月DD日"
            :default-time="[new Date(1996, 1, 1, 8, 0, 0)]"
          ></el-date-picker>
        </el-form-item>
        <el-collapse>
          <!-- 健康与日常 -->
          <el-collapse-item title="健康与日常" name="1">
            <!-- 步数 -->
            <el-form-item label="步数">
              <!-- <el-input class="input-text" type="number" v-model="today.fitness.stepCount"></el-input> -->
              <el-input-number :min="0" :step="100" v-model="today.fitness.stepCount" step-strictly :controls="false"></el-input-number>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Today",
  data () {
    return {
      today: {
        date: new Date(), // 日期
        // 健身
        fitness: {
          stepCount: 0,  // 步数
        }
      }
    }
  },
  created () {
    // 获取今日数据
    const initData = this.get('today')
    if (initData) this.today = initData
  },
  watch: {
    // 保存今日数据
    today: {
      handler (newData, oldData) {
        this.$store.set('today', newData)
      },
      deep: true
    }
  }
};
</script>
<style lang="less">
  .today {
    .el-collapse-item__header{
      font-size: 30px;
    }
    .input-text {
      display: inline-block;
      width: 220px;
    }
  }
</style>