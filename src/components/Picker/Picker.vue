<template>
  <div class="j-operation">
    <header class="topBar">
      <a href="javascript:;" class="icon icon-left i-left" v-link="{name: 'Home'}">返回</a>
      <h1 class="tit">Picker</h1>
    </header>
    <div class="content f-no-btm">
      <div class="content-pad">
        <a href="javascript:;" @click="status = true">商品列表</a>
        <div>您选择了：{{ phone }}</div>
      </div>
    </div>
    <pic
    class="table"
    keep-alive
    transition="show"
    v-show="status"
    :items = "items"
    ></pic>  
  </div>
</template>

<script>
  import pic from './pic'
  export default {
    data () {
      return {
        status: false,
        items: ['iPhone4', 'iPhone4S', 'iPhone5', 'iPhone5S',
'iPhone6', 'iPhone6S', 'iPad2', 'iPad Retina', 'iPad Air'],
        phone: ''
      }
    },
    components: {
      pic
    },
    events: {
      cancel () {
        this.status = false
      },
      showThePhone (phone) {
        this.phone = phone
      }
    }
  }
</script>
