<template>
  <div class="j-operation" v-show="status" keep-alive>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      status: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>
