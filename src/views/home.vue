<template>
  <div>
    <h1>Home</h1>
    <div>
      Welcome, {{getEmail}} <br>
      Your company is {{getCompany}} <br>
      <br>
      <router-link to="/new"><el-button type="primary" plain>Nouveau dossier</el-button></router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getEmail', 'getCompany'])
  },
  methods: {
    ...mapActions(['getCompanyInfo'])
  },
  mounted() {
    this.getCompanyInfo({ name: this.getCompany })
  }
}
</script>
