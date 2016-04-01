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
        <div id="wrap" class="picker-items-col-wrapper" :style="{'transform': `translate3d(0, ${90 - this.offset + 'px'}, 0)`}">
          <div v-for="item in items" class="picker-item">
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
        offset: 0
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
      startMove () {
        console.log('Start!')
      },
      move (e) {
        let h = document.querySelectorAll('#wrap')[0].offsetHeight - e.target.offsetHeight
        this.offset += e.deltaY
        if (this.offset < 0) {
          this.offset = 0
        }
        if (this.offset > h) {
          this.offset = h
        }
        if (this.offset === 0) {
        }
        e.stopPropagation()
      },
      endMove () {
        console.log('End!')
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
