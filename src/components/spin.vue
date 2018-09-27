<template>
  <div id="spin">
    <div class="spin_item"><img src="../assets/img/1.png">1</div>
    <div class="spin_item"><img src="../assets/img/2.png">2</div>
    <div class="spin_item"><img src="../assets/img/3.png">3</div>
  </div>
</template>
<script>
  export default {
    name: "spin",
    data() {
      return {
        timer: '',
        spin_item: [],
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$nextTick(() => {
          let
            target_parent = document.getElementById('spin'),
            target = document.getElementsByClassName('spin_item'),
            len = target.length;
          for (let k = 0; k < len; k++) {
            this.spin_item.push(`transform: translate(${k * 100}vw, 0)`);
            target[k].setAttribute('style', this.spin_item[k]);
            target[k].setAttribute('spin_id', k);
          }
          target_parent.addEventListener('touchstart', this.moveStart);
          target_parent.addEventListener('touchmove', this.move);
          target_parent.addEventListener('touchend', this.moveEnd);
        })
      },
      moveStart(e) {
        console.group('%c moveStrat-------------------------', 'color:red');
        console.log(e.targetTouches[0]);
        console.groupEnd();
      },
      move(e) {
        console.group('%c move-------------------------', 'color:red');
        console.log(e.targetTouches[0]);
        console.groupEnd();
      },
      moveEnd(e) {
        console.group('%c moveEnd-------------------------', 'color:red');
        console.log(e.targetTouches);
        console.groupEnd();
      }
    },
  }
</script>
<style lang="stylus">
  *
    margin: 0
    padding: 0
  html, body, #app
    height: 100%
  #spin
    position relative
    top: 0
    left: 0
    width: 100vw
    height: 56.25vw
    overflow-x scroll
    .spin_item
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      img
        width: 100%
        height: 100%

</style>
