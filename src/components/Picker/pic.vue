<template>
  <div class="picker-modal picker-columns">
    <header class="topBar bar-nav">
      <button @click="cancel" class="button button-link pull-left">
        取消
      </button>
      <h1 class="tit">标题</h1>
      <button @click="cancel" class="button button-link pull-right">
        确定
      </button>
    </header>
    <div class="picker-modal-inner picker-items">
      <div id="operation" class="picker-items-col picker-items-col-center picker-items-col-normal">
        <div id="wrap" class="picker-items-col-wrapper" :style="{'transform': `translate3d(0, ${90 + this.offset + 'px'}, 0)`}">
          <div v-for="item in items" class="picker-item" :class="{ 'picker-checked': $index === index }">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="picker-center-highlight"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        offset: 0,
        currentY: 0,
        index: 0
      }
    },
    props: {
      items: {
        type: Array,
        required: false,
        default: []
      }
    },
    methods: {
      cancel () {
        this.$dispatch('cancel')
      },
      startMove (e) {
        this.currentY = e.touches[0].clientY
      },
      move (e) {
        this.offset += e.touches[0].clientY - this.currentY
        this.currentY = e.touches[0].clientY
      },
      endMove () {
        if (this.offset > 0) {
          this.offset = 0
          this.index = 0
          this.$dispatch('showThePhone', this.items[0])
          return
        }
        if (this.offset < -290) {
          this.offset = -290
          this.index = this.items.length - 1
          this.$dispatch('showThePhone', this.items[this.items.length - 1])
          return
        }
        if (this.offset % 36 !== 0) {
          console.log(Math.ceil((-this.offset) / 36))
          this.index = Math.ceil((-this.offset) / 36)
          this.offset = -this.index * 36
          this.$dispatch('showThePhone', this.items[this.index])
          return
        }
        console.log(this.offset)
      }
    },
    ready () {
      let op = document.getElementById('operation')
      op.addEventListener('touchstart', this.startMove)
      op.addEventListener('touchmove', this.move)
      op.addEventListener('touchend', this.endMove)
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_picker";
</style>
