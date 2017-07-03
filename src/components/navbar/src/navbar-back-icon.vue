<template>
    <span>
        <i class="back-icon"></i>
        <slot></slot>
    </span>
</template>

<script>
import { isColor } from '../../../utils/assist';

export default {
    name: 'yd-navbar-back-icon',
    props: {
        color: {
            validator (value) {
                if (!value) return true;
                return isColor(value);
            },
            default: '#5C5C5C'
        }
    }
}
</script>
