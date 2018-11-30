<template>
  <div id="numInput">
    <el-input placeholder="numInput" v-model="currentValue" @input="limitNum"></el-input>
  </div>
</template>
<script>
  export default {
    name: "numInput",
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      value: {
        type: String,
        default: 'numInput'
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      numLen: {// 小数点算一位，用户可输入的长度
        type: Number,
      },
      precision: {// 几位小数
        type: Number,
      },
      numType: {// 不会出现 + 号
        type: String,
        default: ''
        // {
        //    "无限制": '',
        //    "整数": 'integer',
        //    "正数": 'plus',
        // }
        //    "小数": 'decimals',
        //    "负数": 'minus'
      }
    },
    data() {
      return {
        currentValue: '',
        oldValue: '',
      }
    },
    watch: {
      value() {
        console.log(isNaN(this.value));
        this.currentValue = this.value;
        this.limitNum();
      }
    },
    methods: {
      assignment(newVal) {
        this.$nextTick(() => {
          this.currentValue = newVal;
        })
      },
      // 数字输入框
      limitNum() {
        const {min, max, numType, numLen} = this;
        let val = this.currentValue;
        if (val.length > numLen) {
          this.assignment(this.oldValue);
          return;
        }
        console.log(this.oldValue);
        if (val.match(/^0{1}$/)) return;// 首位0
        if (numType !== 'plus' && val.match(/^\-{1}$/)) return;// 正数
        if (numType !== 'integer' && val.match(/^\.{1}$/)) return;// 整数
        if (!isNaN(val)) {
          if (!val.match(/\.+/)) val = val.replace(/(\b0+)/, '');
          this.oldValue = val;
          // 最小值边界
          if (val < min) val = min;
          // 最打值边界
          if (val > max) val = max;
          // 整数
          if (numType === 'integer') val = val.replace(/(\.+)/, '');
          this.assignment(val);
        }
        else this.assignment(this.oldValue);
      },
      blurFunc() {},
    }
  }
</script>
<style scoped>
  #numInput{
    margin: 10px 0;
  }
</style>
