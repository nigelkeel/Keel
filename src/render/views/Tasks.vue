<template>
  <div class="tasks main">
    <h1>任务箱</h1>
    <div class="boxer">
      <!-- 新建任务按钮 -->
      <div style="float: right">
        <el-button @click="addOrEditTask()">新建任务</el-button>
        <!-- <el-button @click="addOrEditTask(1)">编辑任务</el-button> -->
      </div>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-card>
            <h2>所有任务</h2>
            <!-- 展示数据 -->
            <el-table :data="tasks">
              <!-- 完成按钮 -->
               <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <!-- 任务名称 -->
              <el-table-column
                prop="name"
                label="任务名称"
                width="120">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card>
            <h2>任务详情</h2>
            <!-- 展示数据 -->
            <el-table :data="[]">
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 新建任务&编辑任务 对话框 -->
    <el-dialog
      :title="isEdit ? '编辑任务' : '新建任务'"
      v-model="showDialog"
      width="40%">
      <!-- 新建任务表单 -->
      <el-form>
        <el-form-item label="任务名称"><el-input v-model="defaultTask.name"></el-input></el-form-item>
        <!-- 任务类型 -->
        <el-form-item label="任务类型">
          <el-select v-model="defaultTask.type" placeholder="请选择">
            <el-option v-for="item in taskTypeList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <!-- 任务时限 -->
        <el-form-item label="任务时限">
          <el-date-picker
            v-model="defaultTask.date"
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
          <el-input-number v-model="defaultTask.timeConsuming" :min="0" :step="15" controls-position="right"></el-input-number>
        </el-form-item>
        <!-- 任务优先级 -->
        <el-form-item label="任务优先级">
          <el-rate v-model="defaultTask.level" show-text :texts="taskLevelTexts"></el-rate>
        </el-form-item>
        <!-- 任务描述 -->
        <el-form-item label="任务描述">
          <el-input v-model="defaultTask.remarks" type="textarea"></el-input>
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
      defaultTask: {
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
      defaultTaskInit: {}, 
      // 新建任务类型可选项
      taskTypeList: [ "日常", "工作", "委托", "杂项", ], 
      taskLevelTexts: ["无关紧要", "一般", "普通", "重要", "核心"],
      // 任务数据库
      tasks: [],
    }
  },
  created () {
    // 拷贝一份初始数据
    this.defaultTaskInit = Object.assign({}, this.defaultTask);
    // 获取任务数据库
    const result = this.$store.get('tasks') || []
    this.tasks = Object.assign([], result)
  },
  watch: {
    tasks: {
      handler (newData, oldData) {
        this.$store.set('tasks', newData)
      },
      deep: true
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
      this.tasks.push(Object.assign({}, this.defaultTask))
      // 重置数据
      this.defaultTask = Object.assign({}, this.defaultTaskInit)
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
      width: 300px;
    }
    .el-form-item__label {
      width: 100px;
    }
  }
</style>