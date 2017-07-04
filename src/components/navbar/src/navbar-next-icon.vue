<template>
  <span>
    <slot></slot>
    <i class="next-icon" :style="{color: color}"></i>
  </span>
</template>

<script>
import { isColor } from '../../../utils/assist';

export default {
  name: 'yd-navbar-next-icon',
  props: {
    color: {
      validator (value) {
        if (!value) return true;
        return isColor(value);
      },
      default: '#fff'
    }
  }
}
</script>
