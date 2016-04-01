<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">标签页</h1>
    </header>
    <div class="content f-no-btm">
      <div class="tab-btn">
        <tab-item :status="status === 0" @click="status = 0">已发货</tab-item>
        <tab-item :status="status === 1" @click="status = 1">未发货</tab-item>
        <tab-item :status="status === 2" @click="status = 2">全部订单</tab-item>
      </div>
      <div class="tab-mark sui-transition" :style="{'width': `${100 / (this.$el.querySelectorAll('.tab').length)}%`, 'transform': `translate3d(${(this.status) * 100}%, 0, 0)`}"></div>
      <div class="tab-content">
        <tab-content :status="status === 0">已发货</tab-content>
        <tab-content :status="status === 1">未发货</tab-content>
        <tab-content :status="status === 2">全部订单</tab-content>
      </div>
    </div>
  </div>
</template>

<script>
  import tabItem from './tabItem'
  import tabContent from './tabContent'
  export default {
    data () {
      return {
        status: 0
      }
    },
    components: {
      tabItem,
      tabContent
    }
  }
</script>

<style lang="less">
  .sui-transition {
    transition: transform .3s ease-in-out; 
    transform: translate3d(0, 0, 0);
  }
</style>

