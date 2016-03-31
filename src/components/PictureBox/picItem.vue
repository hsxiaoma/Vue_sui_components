<template>
  <li class="pic-item" :style="{'width': `${100 / this.count}%`}">
    <img :src="item.src" alt="item.alt">
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    }
  }
</script>
