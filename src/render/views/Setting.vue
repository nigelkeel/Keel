<template>
  <div class="setting main">
    <h1>设置中心</h1>
    <div class="boxer">
      <el-row :gutter="10">
        <!-- 用户设置 -->
        <el-col :span="8">
          <el-card>
            <h2>资料设置</h2>
            <el-form>
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
              <!-- 签名设置 -->
              <el-form-item label="签名">
                <el-input class="input-text" v-model="user.theSignature"></el-input>
              </el-form-item>
            </el-form> 
          </el-card>
        </el-col>
        <!-- 界面设置 -->
        <el-col :span="8">
          <el-card>
            <h2>界面设置</h2>
            <el-form>
              <el-form-item label="夜间模式">
                <el-switch v-model="system.ui.darkMode"></el-switch>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <!-- 系统设置 -->
        <el-col :span="8">
          <el-card>
            <h2>系统设置</h2>
            <el-form>
              <el-form-item label="安全模式">
                <el-switch v-model="system.securityMode"></el-switch>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getYYYYmmDD } from '/utils/time'
export default {
  name: "Setting",
  data (){
    return {
      user: {
        name: "", // 昵称
        birthday: "", // 生日
        city: "", // 城市
        theSignature: "这个人很懒，什么都没写。", // 个性签名
      },
      system: {
        securityMode: false, // 安全模式
        ui: {
          darkMode: false, // 夜间模式
        }
      },
      tempBirthday: "",
    };
  },
  created (){
    // 获取设置数据
    const userData = this.$store.get('user')
    const systemData = this.$store.get('system')
    if (userData){
      this.user = userData
      this.tempBirthday = userData.birthday
    }
    if (systemData){
      this.system = systemData
    }
  },
  watch: {
    // 数据更改就自动保存
    user: {
      handler (data){
        this.$store.set('user', data)
      },
      deep: true
    },
    system: {
      handler (data){
        this.$store.set('system', data)
      },
      deep: true
    }
  },
  methods: {
    // 更新生日
    updateBirthday (){
      console.log(this.tempBirthday)
      this.user.birthday = getYYYYmmDD(this.tempBirthday)
    },
  }
}
</script>
<style lang="less">
  .setting {
    .input-text {
      display: inline-block;
      width: 220px;
    }
    .el-card {
      height: 800px;
    }
  }
</style>
