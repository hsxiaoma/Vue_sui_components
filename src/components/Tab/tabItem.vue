<template>
  <div class="tab" :class="{'tab-checked': status}">
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
