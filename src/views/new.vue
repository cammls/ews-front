<template>
  <div>
    <h1>New Shipment for {{getCompany}}</h1>
    <el-upload
    drag
    ref="upload"
    action="http://localhost:4000/api/company/newshipment"
    :headers="headerInfo"
    :auto-upload="false"
    :limit="1"
    :on-exceed="handleExceed"
    :before-remove="beforeRemove"
    :on-success="onSuccess"
    :on-error="onError">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">Drop your bill here or <em>click to upload</em></div>
  </el-upload>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Submit</el-button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getCompany', 'getToken'])
  },
  data() {
    return {
      headerInfo: {}
    }
  },
  methods: {
    beforeRemove(file) {
      return this.$confirm(`Are you sure you want to remove ${ file.name }？`, '', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
    },
    handleExceed() {
      this.$message.warning(`You can upload only one bill per shipment`)
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    onSuccess() {
      this.$message({
        message: 'Your shipment has been added',
        type: 'success'
      })
      this.$router.push('/')
    },
    onError() {
      this.$message.error('An error occurred')
    }
  },
  mounted () {
    this.headerInfo = {authorization: this.getToken}
  }
}
</script>
