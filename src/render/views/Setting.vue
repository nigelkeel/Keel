<template>
  <div class="setting main">
    <h1>设置中心</h1>
    <el-card>
      <el-form>
        <el-collapse>
          <!-- 资料设置 -->
          <el-collapse-item title="资料设置" name="1">
            <!-- 昵称设置 -->
            <el-form-item label="昵称">
              <el-input class="input-text" v-model="user.name"></el-input>
            </el-form-item>
            <!-- 生日设置 -->
            <el-form-item label="生日">
              <el-date-picker
                v-model="tempBirthday"
                type="date"
                placeholder="选择日期"
                format="YYYY年MM月DD日"
                @change="updateBirthday"
                :default-time="[new Date(1996, 1, 1, 8, 0, 0)]"
              ></el-date-picker>
            </el-form-item>
            <!-- 设置城市 -->
            <el-form-item label="城市">
              <el-input class="input-text" v-model="user.city"></el-input>
            </el-form-item>
          </el-collapse-item>
          <!-- 系统设置 -->
          <el-collapse-item title="系统设置" name="2">
          </el-collapse-item>
        </el-collapse>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { getYYYYmmDD } from '/utils/time'
export default {
  name: "Setting",
  data() {
    return {
      user: {
        name: "", // 昵称
        birthday: "", // 生日
        city: "", // 城市
      },
      tempBirthday: "",
    };
  },
  created () {
    // 获取设置数据
    const userData = this.$store.get('user')
    if (userData) {
      this.user = userData
      this.tempBirthday = userData.birthday
    }
  },
  watch: {
    user: {
      handler (newData, oldData) {
        this.$store.set('user', newData)
      },
      deep: true
    }
  },
  methods: {
    // 更新生日
    updateBirthday () {
      console.log(this.tempBirthday)
      this.user.birthday = getYYYYmmDD(this.tempBirthday)
    },
  }
}
</script>
<style lang="less">
  .setting {
    .el-collapse-item__header{
      font-size: 30px;
    }
    .input-text {
      display: inline-block;
      width: 220px;
    }
  }
</style>
