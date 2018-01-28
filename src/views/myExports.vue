<template>
  <div>
    <h1>Mes dossiers</h1>
    <div>
      Voici les dossiers pour GETCOMPANY
    </div>

  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Dossier"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Etat"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Action">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    name: 'myExports',
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
