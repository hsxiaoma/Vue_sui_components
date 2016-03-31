<template>
  <div class="j-operation">
    <header class="topBar">
      <a class="i-left icon icon-left" href="javascript:;" v-link="{name: 'Home'}"></a>
      <h1 class="tit">标题栏和工具栏</h1>
    </header>
    <div class="content">
      <div class="list-block">
        <ul>
          <li><a v-link="{name: 'titleBar'}" class="u-item" href="javascript:;">标题栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'linkBar'}" class="u-item" href="javascript:;">带链接的标题栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'btnBar'}" class="u-item" href="javascript:;">带按钮的标题栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'utilBtm'}" class="u-item" href="javascript:;">工具栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'docBtm'}" class="u-item" href="javascript:;">只有文案的工具栏<i class="icon-arrow"></i></a></li>
          <li><a v-link="{name: 'multiBar'}" class="u-item" href="javascript:;">多级导航和工具栏<i class="icon-arrow"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
