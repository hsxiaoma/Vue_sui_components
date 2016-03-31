<template>
<div class="j-operation">
  <div class="wrap" v-bind:class="{ 'come-out': isS, 'come-in':!isS }">
    <header class="topBar">
      <a class="i-left icon icon-me" href="javascript:;" @click="showMe"></a>
      <h1 class="tit">SUI Mobile</h1>
      <a class="i-right icon icon-menu" href="javscript:;" @click="showMenu"></a>
    </header>
    <div class="content">
      <p class="content-block-title">示例</p>
      <div class="list-block">
        <ul>
          <li><a v-link="{name: 'UtilBar'}" class="u-item" href="javascript:;">标题栏和工具栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Button'}" class="u-item" href="javascript:;">按钮<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Form'}" class="u-item" href="javascript:;">表单<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Tab'}" class="u-item" href="javascript:;">标签页<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Dialog'}" class="u-item" href="javascript:;">对话框<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'OTable'}" class="u-item" href="javascript:;">操作表<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Calendar'}" class="u-item" href="javascript:;">日历<i class="icon-arrow"></i></a></li>         
          <li><a v-link="{name: 'Picker'}" class="u-item" href="javascript:;">picker (未完成)<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Slide'}" class="u-item" href="javascript:;">幻灯片<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'PictureBox'}" class="u-item" href="javascript:;">图片浏览器<i class="icon-arrow"></i></a></li>
          <li><a class="u-item" href="javascript:;">下拉刷新<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'Icons'}" class="u-item" href="javascript:;">图标<i class="icon-arrow"></i></a></li>
        </ul>
      </div>
    </div>
    <footer class="btmBar">
      <a class="i-left icon icon-edit" href="javascript:;"></a>
      <a class="i-right icon icon-settings" href="javascript:;"></a>
    </footer>
  </div>
  <div class="m-panel" v-show="isS" transition="me">
    <div>
      <p>这是一个侧栏框</p>
      <a href="javascript:;" @click="closeMe">close</a>
    </div>
  </div>
  <div class="m-panel-menu" v-show="isM" transition="menu">
    <header class="topBar">
      <h1 class="tit">关于 SUI Mobile</h1>
      <a class="icon i-right" href="javascript:;" @click="closeMenu">关闭</a>
    </header>
    <div class="content">
      <div class="content-inner">
        <div class="content-block">
          <p>SUI Mobile 是阿里巴巴共享业务事业部SDC团队（UED）提供的一套手机UI库。</p>
          <p>他们的目的是为手机千牛、百川以及任何手机端的H5页面提供标准的设计规范和前端实现。</p>
          <p>listen只是用vue.js 重新实现了一遍轮子。</p>
          <p>这里只是一个官方示例，详细文档请参考：<a href="http://m.sui.taobao.org/">http://m.sui.taobao.org/</a></p>
          <div class="m-btns">
            <button class="u-btn u-btn-default" @click="closeMenu">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data: () => {
      return {
        isS: false,
        isM: false
      }
    },
    methods: {
      showMe () {
        this.isS = !this.isS
      },
      closeMe () {
        this.isS = false
      },
      showMenu () {
        this.isM = true
      },
      closeMenu () {
        this.isM = false
      }
    }
  }
</script>

<style lang="less">
  @import "../style/base/variable/global";
  .wrap {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .btmBar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.2rem;
    background: @bg-gray-lighter;
    text-align: center;
  }
  /* 个人中心侧滑框 */
  .m-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 12rem;
    height: 100%;
    background: #111;
    color: #fff;
    padding: 1rem;
    transition: left .7s ease-in-out;
  }
  .me-enter, .me-leave {
    left: -12rem;
  }
  .come-out {
    transition: transform .7s ease-in-out;
    transform: translate3d(12rem, 0, 0);
  }
  .come-in {
    transition: transform .7s ease-in-out;
    transform: translate3d(0, 0, 0)
  }
  /* 菜单栏 */
  .m-panel-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: transform .7s ease-in-out;
    transform: translate3d(0, 0, 0);
  }
  .menu-enter, .menu-leave {
    transform: translate3d(0, 100%, 0);
  }
</style>