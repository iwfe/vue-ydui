<template>
  <div class="rollnotice-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'yd-rollnotice-item',
  mounted () {
    this.$parent.init();
  }
}
</script>
