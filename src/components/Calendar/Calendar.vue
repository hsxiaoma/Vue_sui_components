<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">日历</h1>
    </header>
    <div class="content f-no-btm">
      <div class="content-pad">
        <a href="javascript:;" @click="status = !status">日历</a>
        <p>{{ date }}</p>
      </div>
    </div>
    <calendar
    class="table"
    v-show="status"
    keep-alive
    transition="show"
    ></calendar>
  </div>
</template>

<script>
  import calendar from './cal'
  export default {
    data () {
      return {
        theDate: '',
        status: false
      }
    },
    computed: {
      date () {
        return this.theDate
      }
    },
    components: {
      calendar
    },
    events: {
      selected (year, month, day) {
        this.theDate = '你选择了' + year + '年' + month + '月' + day + '日'
        this.status = false
      }
    }
  }
</script>
