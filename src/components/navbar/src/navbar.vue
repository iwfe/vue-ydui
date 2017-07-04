<template>
  <header class="m-navbar" :class="classes" :style="{backgroundColor: bgcolor, height: height}">
    <div class="navbar-item">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center-box" :style="{height: height}">
      <div class="navbar-center">
        <slot name="center">
          <span class="center-title" :style="{color: color, fontSize: fontsize}">{{title}}</span>
        </slot>
      </div>
    </div>
    <div class="navbar-item">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
import { isColor } from '../../../utils/assist';

export default {
  name: 'yd-navbar',
  props: {
    title: String,
    fixed: Boolean,
    bgcolor: {
      validator (value) {
        if (!value) return true;
        return isColor(value);
      },
      default: 'rgba(33, 33, 33, 1.0)'
    },
    color: {
      validator (value) {
        if (!value) return true;
        return isColor(value);
      },
      default: '#fff'
    },
    fontsize: {
      validator (value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '.36rem'
    },
    height: {
      validator (value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '.88rem'
    }
  },
  computed: {
    classes () {
      return this.fixed ? 'navbar-fixed' : '';
    }
  }
}
</script>

<style lang="less">
@import '../../../styles/components/navbar.less';
</style>
