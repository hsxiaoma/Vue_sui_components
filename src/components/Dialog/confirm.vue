<template>
  <div class="modal modal-in">
    <div class="modal-inner">
      <div>{{ msg.tit }}</div>
      <div>{{ msg.content }}</div>
    </div>
    <div class="modal-btns">
      <span class="modal-btn" @click="cancel">取消</span>
      <span class="modal-btn modal-button-bold" @click="cb">确定</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: Object,
        required: true,
        default: {}
      }
    },
    methods: {
      cancel () {
        this.$dispatch('cancel')
      },
      cb () {
        this.$dispatch('cb')
      }
    }
  }
</script>

<style lang="less" scoped>
  .modal-btn:first-child:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      left: auto;
      bottom: auto;
      width: 1px;
      height: 100%;
      background-color: #b5b5b5;
      display: block;
      z-index: 15;
      transform-origin: 100% 50%;
  }
  .modal-btn:first-child {
    border-radius: 0 0 0 .35rem;
  }
  .modal-btn:last-child {
    border-radius: 0 0 .35rem 0;
  }
</style>
