<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" @click="cancel"></a>
      <h1 class="tit">{{ current + 1 }} of {{ count }}</h1>
    </header>
    <div class="content">
      <div class="pic-box">
        <ul :style="{'width': `${this.count * 100}%`, 'left': `${-100 * this.current}%`}">
          <pic-item
          v-for="item in items"
          :item="item"
          :count="count">
          </pic-item>
        </ul>
      </div>
    </div>
    <footer class="btmBar btmBar-tab">
      <a href="javascript:;" class="tab-item col5" :class="{ 'lock': left }" 
      @click="goLeft">
        <i class="icon icon-left"></i>
      </a>
      <a href="javascript:;" class="tab-item col5" :class="{ 'lock': right }" 
      @click="goRight">
        <i class="icon icon-right"></i>
      </a>
    </footer>
  </div>
</template>

<script>
  import picItem from './picItem'
  export default {
    data () {
      return {
        count: this.items.length,
        current: 0,
        left: true,
        right: false
      }
    },
    props: {
      items: {
        type: Array,
        required: false
      }
    },
    methods: {
      cancel () {
        this.$dispatch('cancel')
      },
      goLeft () {
        if (this.current !== 0) {
          this.right = false
          this.current--
          if (this.current === 0) {
            this.left = true
          }
        }
      },
      goRight () {
        if (this.current !== 2) {
          this.left = false
          this.current++
          if (this.current === 2) {
            this.right = true
          }
        }
      }
    },
    components: {
      picItem
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_pic_box";
</style>
