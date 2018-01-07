<template>
  <div class="menu">
  <el-menu theme="dark"  mode="horizontal">
    <router-link to="/"><el-menu-item index="1">Monarq</el-menu-item></router-link>
    <el-menu-item @click="gotToHome" class="right" index="2">Home</el-menu-item>
  </el-menu>
  </div>
</template>

<style scoped>
  .el-menu .right {
    float: right;
  }
  .el-menu {
    border-radius: 0px;
    margin-bottom: 0px;
    background-color: #d55f10;
  }
  .el-menu-item {
    font-size: 24px;
    color: white
  }
  .el-menu-item:hover {
    background-color: #d55f10;
  }
  .menu {
    position: fixed;
    bottom: 100;
    z-index: 100;
    width: 100%;
    top: 0
  }
</style>

<script>

export default {
  methods: {
    gotToHome() {
      this.$router.push('/')
    }
  }
}
</script>
