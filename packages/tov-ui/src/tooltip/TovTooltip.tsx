import type { PropType, VNode } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import type { Placement } from '@floating-ui/vue'
import { offset, useFloating } from '@floating-ui/vue'
import { useClassnames } from '@st4r-ui/utils'

export default defineComponent({
  name: 'TovTooltip',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-center',
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType< 'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    const reference = ref<HTMLDivElement>()
    const floating = ref<HTMLDivElement>()
    const show = ref(false)
    const placement = computed(() => props.placement)
    const { c } = useClassnames('Tooltip')
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(4)],
    })
    let timer: ReturnType<typeof setTimeout> | undefined
    const handleMouseEnter = () => {
      if (props.trigger !== 'hover')
        return
      show.value = true
    }
    const handleClick = () => {
      if (props.trigger !== 'click')
        return
      show.value = true
    }

    const handleMouseLeave = () => {
      timer = setTimeout (() => {
        show.value = false
      }, 100)
    }
    return () => {
      const renderTooltip = () => {
        if (!reference.value)
          return null
        if (!show.value)
          return null

        const cls = {
          [c()]: true,
        }

        const events = {
          onmouseenter: () => {
            if (timer)
              clearTimeout(timer)
            timer = undefined
          },
          onmouseleave: () => {
            show.value = false
          },

        }

        return (
          <div {...events} class={cls} ref={floating} style={floatingStyles.value}>
            {slots.content ? slots.content?.() : props.content}
          </div>
        )
      }

      const children = filterEmpty(slots.default?.())
      if (children && children.length < 1)
        return null

      if (children.length > 1) {
        console.warn('TovTooltip只能有一个子元素')
        return children
      }
      const node = children[0]

      if (isBaseType(node)) {
        console.warn('TovTooltip必须有一个子元素')
        return node
      }

      const events = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      }

      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })

      return (
        <>
          {tipNode}
          {renderTooltip()}
        </>
      )
    }
  },
}) //
