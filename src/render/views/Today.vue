<template>
  <div class="today main">
    <h1>今日</h1>
    <el-card>
      <el-form>
        <!-- 日期 -->
        <el-form-item>
          <div style="font-size: 20px; font-weight: 666">{{date}}</div>
          {{test}}
          <!-- <el-date-picker
            v-model="today.date"
            type="date"
            placeholder="选择日期"
            format="YYYY年MM月DD日"
            :default-time="[new Date(1996, 1, 1, 8, 0, 0)]"
          ></el-date-picker> -->
        </el-form-item>
        <el-collapse>
          <!-- 健康与日常 -->
          <el-collapse-item title="健康与日常" name="1">
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
        // 健身
        fitness: {
          stepCount: 0,  // 步数
        },
        log: "", // 日志
      }
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
    .input-text {
      display: inline-block;
      width: 220px;
    }
  }
</style>