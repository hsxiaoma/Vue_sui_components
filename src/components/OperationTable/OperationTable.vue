<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">操作表</h1>
    </header>
    <div class="content f-no-btm">
      <div class="content-pad">
        <a href="javascript:;" @click="status = true">操作表</a>
      </div>
    </div>
    <div class="modal-overlay" :class="{ 'modal-overlay-visible': status }"></div>
    <o-table
    class="table" 
    v-show="status"
    keep-alive
    transition="show">
    </o-table>
  </div>
</template>

<script>
  import oTable from './oTable'
  export default {
    data () {
      return {
        status: false
      }
    },
    components: {
      oTable
    },
    events: {
      cancel () {
        this.status = false
      }
    }
  }
</script>

<style lang="less">
  .table {
    transition: transform .3s ease-in-out;
    transform: translate3d(0, 0, 0);
  }
  .show-enter, .show-leave {
    transform: translate3d(0, 100%, 0);
  }
</style>
