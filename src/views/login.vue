<template>
<div class="login">
    <h1>Login</h1>
    <el-form ref="form" :model="form">
  <el-form-item label="Email">
    <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item label="Password">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">Login</el-button>
</el-form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser(this.form)
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err)) // TODO afficher err
    }
  }
}
</script>
<style scoped>
  .login {
    width: 30%;
    margin:auto;
  }
</style>
