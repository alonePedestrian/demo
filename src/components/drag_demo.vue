<template>
  <div>
    <h3>拖拽列表功能</h3>
    <br><br><br>
    <wTable :data="tableData" :header="tableHeader" :option="tableOption">
      <el-table-column slot="fixed"
                       fixed
                       prop="date"
                       label="日期"
                       width="150">
      </el-table-column>
    </wTable>
    <h3>封装input--测试</h3>
    <br><br><br>
    <input type="" name="" v-model="intNum">
    <numInput :value="intNum" @nalai=n></numInput>
    <div><label>我来展示</label>{{intNum}}</div>
  </div>
</template>
<script>
  import wTable from './drag.vue'
  import numInput from './numInput.vue'

  export default {
    name: "demoF",
    data() {
      return {
        intNum: '',
        tableOption: {
          border: true,
          maxHeight: 500
        },
        tableHeader: [
          {
            prop: 'name',
            label: '姓名',
            sortable: true,
            sortMethod: this.handleNameSort
          },
          {
            prop: 'province',
            label: '省份',
            minWidth: '120'
          },
          {
            prop: 'city',
            label: '市区',
            minWidth: '120'
          },
          {
            prop: 'address',
            label: '地区',
            minWidth: '150'
          },
          {
            prop: 'zip',
            label: '邮编',
            minWidth: '120'
          }
        ],
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    },
    methods: {
      n(val) {
        console.log(val);
      },
      handleNameSort() {
        console.log('handleNameSort')
      }
    },
    components: {
      wTable,
      numInput
    }
  }
</script>
<style scoped>
</style>
