<template>
  <div>
    <h1>Paramètres</h1>
    <div>
      Voici les paramètres pour GETCOMPANY
    </div>
    <el-form :model="ruleForm2" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Email" prop="mail">
        <el-input type="text" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="text" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Submit</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>

// GET Company.user && Company.password
// Show form with current data on DB
// POST password update or passwrd  entry
// Run test script then confirm password works

export default {
   data() {
     return {
     };
   },
   methods: {
     submitForm(formName) {
       this.$refs[formName].validate((valid) => {
         if (valid) {
           alert('submit!');
         } else {
           console.log('error submit!!');
           return false;
         }
       });
     },

   }
 }
</script>
