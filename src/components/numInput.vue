<template>
  <div id="numInput">
    <el-input v-model="val"
              @input="limitNum(val, 'val', 0, '')"
    ></el-input>
  </div>
</template>
<script>
  export default {
    name: "numInput",
    props: {
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: '',
      numType: {// 数据类型 小数 整数
        type: String,
        default: 'integer',
      }
    },
    data() {
      return {
        val: this.value,
        currentValue: '',
      }
    },
    methods: {
      // input 输入数字处理
      limitNum(val, attr, min) {
        val = val.replace(/\++/g, '');// 去除 '+'
        console.log(isNaN(val));




        if (!isNaN(val)) {
          let oldCurrentValue = this.currentValue;
          this.currentValue = val.replace(/(\b0+)/, '');
          // 最小值边界
          if (this.currentValue < min) this.currentValue = oldCurrentValue;
          // 正整数
          if (this.numType === 'integer') this.currentValue = this.currentValue.replace(/(\.+)/, '');
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
