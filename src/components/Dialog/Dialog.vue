<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">对话框</h1>
    </header>
    <div class="content f-no-btm">
      <div class="content-pad">
        <a class="dia-item" href="javascript:;" @click="status = 1">带有文案和标题的alert</a>
        <a class="dia-item" href="javascript:;" @click="status = 2">带回调的alert</a>
        <a class="dia-item" href="javascript:;" @click="status = 3">Confirm</a>
        <a class="dia-item" href="javascript:;" @click="status = 4">Prompt</a>
      </div>
    </div>
    <!-- 对话框 -->
    <div> 
      <!-- 普通对话框 -->
      <normal-dia v-show="status === 1" keep-alive :msg="msg1">
      </normal-dia>
      <!-- 带有回调的对话框 -->
      <callback-dia v-show="status === 2" keep-alive :msg="msg1">
      </callback-dia>
      <!-- confirm -->
      <confirm v-show="status === 3" keep-alive :msg="msg1">
      </confirm>
      <!-- prompt -->
      <prompt v-show="status === 4" keep-alive :msg="msg1">
      </prompt>
    </div>
    <!-- 蒙层 -->
    <div class="modal-overlay" :class="{ 'modal-overlay-visible': status }"></div>
  </div>
</template>

<script>
  import normalDia from './normalDia'
  import callbackDia from './callbackDia'
  import confirm from './confirm'
  import prompt from './prompt'
  export default {
    data () {
      return {
        status: 0,
        msg1: {
          tit: '这是标题',
          content: '这是一段提示信息'
        }
      }
    },
    components: {
      normalDia,
      callbackDia,
      confirm,
      prompt
    },
    events: {
      cancel () {
        this.status = 0
      },
      cb (content) {
        this.status = 0
        if (content) {
          console.log(content)
        }
        window.alert('我是回调函数')
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_dialog";
  .content-pad {
    padding: .5rem;
  }
  .dia-item {
    display: block;
    pointer: cursor;
  }
</style>
