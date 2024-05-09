<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import { useClassnames } from '@st4r-ui/utils'

export default defineComponent({
  name: 'TovButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: 'default',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    const { c, cx, cm } = useClassnames('button')
    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return {
      cls,
      handleClick,
    }
  },
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>
