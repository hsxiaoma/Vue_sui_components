<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">幻灯片</h1>
    </header>
    <div class="content f-no-btm">
      <div class="content-pad">
        <sli :items="items"></sli>
      </div>
    </div>
  </div>
</template>

<script>
  import sli from './sli'
  export default {
    data () {
      return {
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
      sli
    }
  }
</script>
