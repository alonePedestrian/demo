<template>
	<div id="inputNum">
    <div style="padding-left: 20px; text-align: left">
      <numsInput v-model="nums" :numLen='10' :max="10" :min="-20" style="width: 50%;"></numsInput>
    </div>
    <div>{{nums}}</div>
    <!--<br>
    <hr>
    <br>
    <hr>
    <br>
    <hr>
		<div class="ceiling">测试numInput</div>
		<numInput style="width: 50%; margin-left: 20px" v-model="num" :value="num" :numLen='10' :max="10" :min="2"></numInput>
		<div style="padding-left: 20px; text-align: left">
			<input placeholder="输入字母，汉子，符号 click给numInput" v-model="aa" style="padding: 4px;width: 260px">
			<button @click='aaa' style="padding: 4px 10px">click</button>
		</div>
    <br>
    <hr>-->
	</div>
</template>
<script>
	import numInput from './numInput.vue'
	import numsInput from './numsInput.vue'
	export default{
		name: 'input-num',
		data() {
			return {
				num: '',
				nums: '',
				aa: '',
			}
		},
		methods: {
			aaa() {
				this.num = this.aa;
			},
		},
		components: {
			numInput,
			numsInput,
		}
	}
</script>
<style type="text/css" scoped>
	.ceiling {
		font-size: 18px;
		line-height: 50px;
		text-align: center;
		background: #2db7f5;
		font-weight: 900;
	}
</style>
