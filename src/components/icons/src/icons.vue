<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
import { isColor } from '../../../utils/assist';

export default {
  name: 'yd-icon',
  props: {
    name: String,
    color: {
      validator (value) {
        if (!value) return true;
        return isColor(value);
      }
    },
    size: {
      validator (value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '.6rem'
    }
  },
  computed: {
    classes () {
      return 'icon-' + this.name;
    },
    styles () {
      const style = {};

      if (!!this.size) {
        style.fontSize = this.size;
      }

      if (!!this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
}
</script>

<style lang="less">
@import '../../../styles/components/icons.less';
</style>
