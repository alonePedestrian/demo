<template>
  <div id="numInput">
    <el-input v-model="val"
              @input="limitNum(val, 'val', 0, 'integer')"
    ></el-input>
  </div>
</template>
<script>
  export default {
    name: "numInput",
    props: {
      model: ''
    },
    data() {
      return {
        val: this.model,
        currentValue: '',
      }
    },
    methods: {
      // input 输入数字处理
      limitNum(val, attr, min, type) {
        val = val.replace(/\++/g, '');// 去除 '+'
        console.log(isNaN(val));




        if (!isNaN(val)) {
          let oldCurrentValue = this.currentValue;
          this.currentValue = val.replace(/(\b0+)/, '');
          // 最小值边界
          if (this.currentValue < min) this.currentValue = oldCurrentValue;
          // 正整数
          if (type === 'integer') this.currentValue = this.currentValue.replace(/(\.+)/, '');
          this.$nextTick(() => {
            this[attr] = this.currentValue;
          })
        }
        else {
          this.$nextTick(() => {
            this[attr] = this.currentValue;
          })
        }
      },
    }
  }
</script>
<style scoped>
</style>
