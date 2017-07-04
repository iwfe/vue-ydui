<template>
  <div class="slider-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'yd-slider-item',
  mounted () {
    this.$parent.init();
  }
}
</script>
