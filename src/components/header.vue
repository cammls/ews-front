<template>
  <div class="menu">
  <el-menu theme="dark"  mode="horizontal">
    <router-link to="/"><el-menu-item index="1">Monarq</el-menu-item></router-link>
    <div v-if="getEmail">
      <el-menu-item @click="goToHome" class="right" index="3">Déconnexion</el-menu-item>
      <el-menu-item @click="goToSettings" class="right" index="3">Paramètres</el-menu-item>
      <el-menu-item @click="goToShipments" class="right" index="2">Mes dossiers</el-menu-item>

    </div>
    <div v-else>
      <el-menu-item @click="gotTo(login)" class="right" index="2">Se Connecter</el-menu-item>
      <el-menu-item @click="gotTo(register)" class="right" index="3">S'inscrire'</el-menu-item>
    </div>
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getEmail'])
  },
  methods: {
    gotToHome() {
      this.$router.push('/')
    },
    goToShipments(){
      this.$router.push('/mes-exports')
    },
    goToSettings(){
      this.$router.push('/settings')
    }
  }
}
</script>
