<template>
  <div class="line main">
    <h1>社交中心</h1>
    <el-card></el-card>
  </div>
</template>
<script>
export default {
  name: "Line",
  data () {
    return {
      // 联系人对象
      initObject: {
        id: 0, 
        name: "名字", 
        fullName: "", // （可选）全名
        group: "未归类", // 组
        level: 1, // 等级：密友，好友
        latelyTime: null, // 最近联系时间
        goodFeeling: 60, // 好感值
        relationship: 60, // 关系值
        phone: -1, // 电话
        birthday: null, // 生日
        birthdayType: 0, // 生日类型（农历/公历）
        city: "", // 当前居住城市
        address: "", // 住址
        work: "", // 工作情况
        remark: "", // 备注
      },
      // 社交数据库
      amigos: {
        "云朋友": {
          name: "云朋友",
          level: 3,
        }
      }
    }
  },
};
</script>
<style scoped></style>