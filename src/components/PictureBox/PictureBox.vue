<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}"></a>
      <h1 class="tit">图片浏览器</h1>
    </header>
    <div v-show="!status" keep-alive class="content f-no-btm">
      <div class="content-pad">
        <a href="javascript:;" @click="status = true">图片浏览器</a>
      </div>
    </div>
    <pic-box :items="items" keep-alive v-show="status"></pic-box>
  </div>
</template>

<script>
  import picBox from './picBox'
  export default {
    data () {
      return {
        status: false,
        items: [
          {
            src: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg',
            alt: 'images-1'
          },
          {
            src: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1kQI3HpXXXXbSXFXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg',
            alt: 'images-2'
          },
          {
            src: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i4/TB10rkPGVXXXXXGapXXXXXXXXXX_!!0-item_pic.jpg_640x640q60.jpg',
            alt: 'images-3'
          }
        ]
      }
    },
    components: {
      picBox
    },
    events: {
      cancel () {
        this.status = false
      }
    }
  }
</script>
