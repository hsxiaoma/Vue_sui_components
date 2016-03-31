<template>
  <div class="act-modal">
    <div class="act-modal-group">
      <span class="act-modal-label">请选择</span>
      <span class="act-modal-btn act-modal-bold color-danger">卖出</span>
      <span class="act-modal-btn">买入</span>
    </div>
    <div class="act-modal-group">
      <span class="act-modal-btn bg-danger" @click="cancel">取消</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.$dispatch('cancel')
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_oTable";
</style>
