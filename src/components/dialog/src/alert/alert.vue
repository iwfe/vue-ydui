<template>
  <div class="mask-black-dialog">
    <div class="m-confirm m-alert">
      <div class="confirm-bd" v-html="mes"></div>
      <div class="confirm-ft">
        <a href="javascript:;" class="confirm-btn primary" @click.stop="closeAlert">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    callback: Function
  }
}
</script>

<style lang="less">
@import "../../../../styles/components/dialog.less";
</style>
