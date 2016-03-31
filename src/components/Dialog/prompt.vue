<template>
  <div class="modal modal-in">
    <div class="modal-inner">
      <div>{{ msg.tit }}</div>
      <input v-model="content" type="text" class="modal-text-input">
    </div>
    <div class="modal-btns">
      <span class="modal-btn" @click="cancel">取消</span>
      <span class="modal-btn modal-button-bold" @click="cb">确定</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: ''
      }
    },
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
        this.$dispatch('cb', this.content)
      }
    }
  }
</script>

<style lang="less" scoped>
  .modal-text-input {
    box-sizing: border-box;
    height: 1.5rem;
    background: #fff;
    margin: 0;
    margin-top: 0.75rem;
    padding: 0 0.25rem;
    border: 1px solid #a0a0a0;
    border-radius: 0.25rem;
    width: 100%;
    font-size: 0.7rem;
    font-family: inherit;
    display: block;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    appearance: none;
  }
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