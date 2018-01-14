<template>
<div class="register">
    <h1>Register</h1>
    <el-form ref="form" :model="form">
      <el-form-item label="Company">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="Password Confirmation">
        <el-input v-model="form.passwordConfirmation"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" v-bind:class="{ disabled: invalid }">{{invalid}}</el-button>
    </el-form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      invalid: true
    }
  },
  watch: {
    passwordConfirmation: function(oldPassword,newPassword) {
      this.confirmPassword()
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    confirmPassword() {
      if (this.password === this.passwordConfirmation) {
        this.invalid = false;
        console.log(this.invalid);
      }
    },
    onSubmit() {
      if (this.password === this.passwordConfirmation) {
        let company = {name: this.form.name, user: this.form.email}
        let user = {email: this.form.email, password: this.form.password, passwordConfirmation: this.form.passwordConfirmation}
        this.registerCompany(Object.assign({},company,user))
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err)) // TODO afficher err
      }
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
