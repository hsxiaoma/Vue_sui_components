<template>
  <div class="app">
    <!-- 当前组件先过渡出去，下一个组件再过渡进来 -->
    <router-view
      class="page"
      keep-alive
      transition="page"
    ></router-view>
  </div>
</template>

<style lang="less">
  @import "./style/reset";
  html {
    font-size: 20px;
  }
  .app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @bg-gray-default;
  }
</style>
