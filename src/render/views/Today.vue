<template>
  <div class="today main">
    <h1>今日</h1>
    <div class="boxer">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-card>
            <el-form>
              <!-- 日期 -->
              <el-form-item>
                <div style="font-size: 30px; font-weight: 666">{{date}}</div>
              </el-form-item>
              <el-collapse>
                <!-- 健康与日常 -->
                <el-collapse-item title="健康与日常" name="1">
                  <!-- 饮食状况评估 -->
                  <el-form-item label="饮食状况评估">
                    <el-rate v-model="today.diet.state" show-text :texts="rateTexts">></el-rate>
                  </el-form-item>
                  <!-- 饮水量 -->
                  <el-form-item label="饮水量">
                    <el-input-number :min="0" :step="100" v-model="today.diet.waterQuantity" step-strictly></el-input-number>
                  </el-form-item>
                  <!-- 健身状况评估 -->
                  <el-form-item label="健身状况评估">
                    <el-rate v-model="today.fitness.state" show-text :texts="rateTexts">></el-rate>
                  </el-form-item>
                  <!-- 步数 -->
                  <el-form-item label="步数">
                    <el-input-number :min="0" :step="100" v-model="today.fitness.stepCount" step-strictly :controls="false"></el-input-number>
                  </el-form-item>
                </el-collapse-item>
                <!-- 日志 -->
                <el-collapse-item title="日志" name="2">
                  <el-form-item label="日志">
                    <el-input class="input-text" type="textarea" v-model="today.log"></el-input>
                  </el-form-item>
                </el-collapse-item>
              </el-collapse>
            </el-form>
          </el-card>          
        </el-col>
        <el-col :span="6">
          <el-card>健康</el-card>
        </el-col>
        <el-col :span="6">
          <el-card>发展</el-card>
        </el-col>
        <el-col :span="6">
          <el-card>幸福</el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getYYYYmmDD } from "/utils/time"
export default {
  name: "Today",
  data () {
    return {
      date: "",
      today: {
        date: "", // 日期
        // 饮食
        diet: {
          state: 0, // 饮食状况
          waterQuantity: 0, // 饮水量
        },
        // 健身
        fitness: {
          state: 0, // 健身状况
          stepCount: 0,  // 步数
        },
        log: "", // 日志
      },
      // rate 辅助文字数组
      rateTexts: ["糟糕", "欠佳", "一般", "良好", "极佳"],
    }
  },
  created () {
    // 获取今天日期
    this.date = this.today.date = getYYYYmmDD()
    // 获取日数据库
    const result = this.$store.get('days') || {}
    result[this.date] ? this.today = result[this.date] : ""
  },
  beforeUnmount () {
    // 获取日数据库并保存在日数据库中
    const result = this.$store.get('days') || {}
    result[this.date] = this.today
    this.$store.set('days', result)
  },
  watch: {
  },
  methods: {
    
  },
};
</script>
<style lang="less">
  .today {
    .el-collapse-item__header{
      font-size: 20px;
    }
    .el-form-item__label {
      width: 100px;
    }
    .input-text {
      display: inline-block;
      width: 220px;
    }
  }
</style>