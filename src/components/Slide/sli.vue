<template>
  <div class="slider">
    <ul :style="{'width': `${this.count * 100}%`, 'left': `${-100 * this.current}%`}">
      <sli-item  v-for="item in items" :count="count" :item="item">
      </sli-item>
    </ul>
  </div>
</template>

<script>
  import sliItem from './sliItem'
  export default {
    data () {
      return {
        current: 0,
        count: this.items.length
      }
    },
    props: {
      items: {
        type: Array,
        required: false,
        default: []
      }
    },
    components: {
      sliItem
    },
    methods: {
      autoPlay () {
        setInterval(() => {
          if (this.current === (this.items.length - 1)) {
            this.current = 0
            return
          }
          this.current += 1
        }, 3000)
      }
    },
    ready () {
      this.autoPlay()
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_slider";
</style>

