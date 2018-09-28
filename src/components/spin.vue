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
        mouseX: 0,
        x: 0,
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
            this.spin_item.push(`transform: translateX(${k * 100}vw)`);
            target[k].setAttribute('style', this.spin_item[k]);
            target[k].setAttribute('spin_id', k);
            target[k].setAttribute('now', k);
          }
          target_parent.addEventListener('touchstart', this.moveStart);
          target_parent.addEventListener('touchmove', this.move);
          target_parent.addEventListener('touchend', this.moveEnd);
        })
      },
      moveStart(e) {
        let targetTouches = e.targetTouches[0];
        this.mouseX = targetTouches.pageX;
      },
      move(e) {
        let targetTouches = e.targetTouches[0];
        this.x = targetTouches.pageX;
      },
      moveEnd() {
        let
          target = document.getElementsByClassName('spin_item'),
          len = target.length;
        for (let k = 0; k < len; k++) {
          let _target = target[k],
            now = _target.getAttribute('now'),
            spin_id = _target.getAttribute('spin_id');
          // 左滑
          if (this.mouseX - this.x > 50) {
            now == spin_id - len + 1 ? now = spin_id : now--;
          }
          // 右滑
          else if (this.mouseX - this.x < -50) {
            now == k ? now = spin_id - len + 1 : now++;
          }
          _target.setAttribute('style', `transform: translateX(${now * 100}vw)`);
          _target.setAttribute('now', now);
        }
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
    overflow-x hidden
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
