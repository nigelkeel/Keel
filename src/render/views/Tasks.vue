<template>
  <div class="tasks main">
    <h1>任务箱</h1>
    <el-card>
      <!-- 新建任务按钮 -->
      <div style="float: right">
        <el-button @click="addOrEditTask()">新建任务</el-button>
        <!-- <el-button @click="addOrEditTask(1)">编辑任务</el-button> -->
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card>今日任务</el-card>
        </el-col>
      </el-row>
    </el-card>

    <!-- 新建任务对话框 -->
    <el-dialog
      :title="isEdit ? '编辑任务' : '新建任务'"
      v-model="showDialog"
      width="40%"
      :before-close="handleClose">
      <!-- 新建任务表单 -->
      <el-form>
        <el-form-item label="任务名称"><el-input v-model="newTask.name"></el-input></el-form-item>
        <!-- 任务类型 -->
        <el-form-item label="任务类型">
          <el-select v-model="newTask.type" placeholder="请选择">
            <el-option v-for="item in taskTypeList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <!-- 任务时限 -->
        <el-form-item label="任务时限">
          <el-date-picker
            v-model="newTask.date"
            type="daterange"
            format="YYYY年MM月DD日"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="[new Date(1996, 1, 1, 8, 0, 0), new Date(1996, 1, 1, 8, 0, 0)]">
          </el-date-picker>
        </el-form-item>
        <!-- 任务预计消耗时间 -->
        <el-form-item label="预算分钟数">
          <el-input-number v-model="newTask.timeConsuming" :min="0" :step="15" controls-position="right"></el-input-number>
        </el-form-item>
        <!-- 任务优先级 -->
        <el-form-item label="任务优先级">
          <el-rate v-model="newTask.level">></el-rate>
        </el-form-item>
        <!-- 任务描述 -->
        <el-form-item label="任务描述">
          <el-input v-model="newTask.remarks" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <!-- 新建任务相关按钮 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="primary" @click="saveTask">保 存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Tasks",
  data () {
    return {
      showDialog: false, 
      isEdit: false, 
      currentTaskId: 0, // 当前选中的任务id
      // 新建任务暂存区
      newTask: {
        name: "", // 任务名称
        type: "日常", // 任务类型
        // 任务时限
        date: [new Date, new Date], // 任务时限
        level: 1, // 任务优先级，1-5，5表示最高, 4级以上表示为重要任务
        timeConsuming: null, // 预计消耗时间（单位：分钟）
        remarks: "", // 任务备注
        // -- 编辑特有 --
        taskProgress: 0, // 任务进度
        isAccomplish: false, // 任务是否已经完成
        // -- 自动生成 --
        createTime: new Date(), // 任务创建时间
        // -- 后续更新
        children: [], // 子任务
        tags: [], // 任务标签
        project: "", // 所属项目
        cost: 0, // 预计花费
        reward: 0, // 任务积分奖励
      },
      // 新建任务类型可选项
      taskTypeList: [ "日常", "工作", "委托", "杂项", ], 
      // 任务数据库
      tasks: []
    }
  },
  methods: {
    // 新建任务与编辑任务
    addOrEditTask (id) {
      this.isEdit = id ? true : false
      this.showDialog = true 
    },
    // 保存任务
    saveTask () {
      this.showDialog = false
    }
  },
};
</script>
<style lang="less">
  .tasks {
    .el-row>.el-card {
      height: 600px;
    }
    .el-input, .el-input__inner, .el-input-number, .el-textarea {
      width: 240px;
    }
    .el-form-item__label {
      width: 100px;
    }
  }
</style>