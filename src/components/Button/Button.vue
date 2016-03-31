<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">按钮</h1>
    </header>
    <div class="content">
      <p class="content-block-title">默认按钮</p>
      <div class="content-block">
        <p class="f-mr-btm">
          <button class="u-btn u-btn-default">usual button</button>
        </p>
        <p class="f-mr-btm">  
          <button class="u-btn u-btn-success">success button</button>
        </p>
        <p class="f-mr-btm">
          <button class="u-btn u-btn-danger">danger button</button>
        </p>
        <p class="f-mr-btm">
          <button class="u-btn u-btn-warning">warning button</button>
        </p>
        <p class="f-mr-btm">
          <button class="u-btn u-btn-round">round button</button>
        </p>
        <p class="f-mr-btm">
          <button class="u-btn u-btn-big">big button</button>
        </p>
        <p class="f-mr-btm">
          <button class="u-btn u-btn-big u-btn-round">big round button</button>
        </p>
      </div>
      <p class="content-block-title">按钮组</p>
      <div class="content-block">
        <p class="btns-row">
          <button class="u-btn">btn 1</button>
          <button class="u-btn">btn 2</button>
          <button class="u-btn">btn 3</button>
        </p>
        <p class="btns-row">
          <button class="u-btn" :class="{'active': isA }">btn 1</button>
          <button class="u-btn">btn 2</button>
          <button class="u-btn">btn 3</button>
        </p>
        <p class="btns-row">
          <button class="u-btn u-btn-round">btn 1</button>
          <button class="u-btn u-btn-round">btn 2</button>
        </p>
        <p class="btns-row">
          <button class="u-btn u-btn-round">btn 1</button>
          <button class="u-btn u-btn-round" :class="{'active': isA }">btn 2</button>
        </p>
      </div>
      <p class="content-block-title">填充按钮</p>
      <div class="content-block">
        <p class="f-mr-btm"><button class="u-btn u-btn-default u-btn-fill">full button</button></p>
        <p class="f-mr-btm"><button class="u-btn u-btn-success u-btn-fill">full button</button></p>
        <p class="f-mr-btm"><button class="u-btn u-btn-danger u-btn-fill">full button</button></p>
        <p class="f-mr-btm"><button class="u-btn u-btn-warning u-btn-fill">full button</button></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isA: true
      }
    }
  }
</script>

<style lang="less">
  .f-mr-btm {
    margin-bottom: 1rem;
  }
</style>
