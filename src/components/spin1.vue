<template>
  <div id="spin1">
    <div class="ul">
      <div class="li" v-for="(d, i) in spin1_item" :key="i">
        <img :src="d.img_url" width="100%" height="90%">
        <span class="img-explain">{{d.txt}}</span>
      </div>
    </div>

    <div>
      666
      666 <br>
      999
      999
    </div>
  </div>
</template>
<script>
  export default {
    name: "spin1",
    data() {
      return {
        spin1_item: [
          {
            img_url: require('../assets/img/2.png'),
            txt: 'txt1'
          },
          {
            img_url: require('../assets/img/1.png'),
            txt: 'txt2'
          },
          {
            img_url: require('../assets/img/3.png'),
            txt: 'txt3'
          },
        ]
      }
    }
  }
</script>
<style lang="stylus">
  *
    margin: 0
    padding: 0
  .ul
    display flex
    width: 100vw
    height: 56.25vw
    /*overflow hidden*/
    transform translate3d(-100vw, 0, 0)
  .li
    flex-shrink 0
    width: 100%
    .img-explain
      width: 100%
      text-align center
      color: #b0070e
      font-weight: 900
</style>
