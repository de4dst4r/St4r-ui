import type { CSSProperties } from 'vue'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useClassnames } from '@st4r-ui/utils'

export default defineComponent({
  name: 'TovVirtuallist',
  props: {
    height: {
      type: Number,
      default: 300,
    },
    itemHeight: {
      type: Number,
      default: 30,
    },
    data: {
      type: Array,
      default: () => [],
    },
    buffer: {
      type: Number,
      default: 5,
    },
    dynamicHeight: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickItem'],
  setup(props, { emit }) {
    const { c } = useClassnames('virtual-list')
    const containerRef = ref<HTMLElement | null>(null)
    const scrollTop = ref(0)
    // 不定高列表的元素项真实高度
    const itemHeights = ref<number[]>([])
    const onScroll = () => {
      scrollTop.value = containerRef.value!.scrollTop || 0
    }
    const handleItemClick = (item: any) => {
      emit('clickItem', item)
    }
    onMounted(() => {
      if (containerRef.value)
        containerRef.value.addEventListener('scroll', onScroll)
    })
    onUnmounted(() => {
      if (containerRef.value)
        containerRef.value.removeEventListener('scroll', onScroll)
    })
    const containerHeight = computed(() => {
      if (containerRef.value)
        return containerRef.value.clientHeight
      return props.height
    })
    const sliceItems = computed(() => {
      const itemHeight = props.itemHeight
      const buffer = props.buffer
      const showCounter = Math.ceil(containerHeight.value / itemHeight)
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer
      const startIndex = Math.max(0, counterIndex)
      const endIndex = showCounter + buffer * 2 + counterIndex
      return props.data.slice(startIndex, endIndex).map((item, index) => {
        const itemIndex = startIndex + index
        const itemTop = itemHeights.value.slice(0, itemIndex).reduce((acc, curr) => acc + curr, 0)
        return {
          item,
          top: itemTop,
          height: props.dynamicHeight ? (itemHeights.value[itemIndex] || props.itemHeight) : props.itemHeight,
          key: `Virtuallist${startIndex + index}`,
        }
      })
    })
    // 更新实际高度
    const updateItemHeights = () => {
      // 获取实际高度
      if (containerRef.value) {
        const items = containerRef.value.querySelectorAll('.item') as NodeListOf<HTMLElement>
        items.forEach((item: HTMLElement) => {
          itemHeights.value.push(item.getBoundingClientRect().height) // 实际高度
        })
      }
    }
    return {
      c,
      containerRef,
      sliceItems,
      handleItemClick,
      updateItemHeights,
    }
  },
  render() {
    const slots = this.$slots
    const { c, height, sliceItems } = this
    const containerCls = {
      [c()]: true,
    }
    const containerStyle: CSSProperties = {
      height: `${height}px`,
      overflow: 'auto', // 确保滚动条可用
    }
    return (
      <div class={containerCls} ref="containerRef" style={containerStyle} onScroll={this.updateItemHeights}>
        <div class={c('body')}>
          {sliceItems.map((item) => {
            const itemStyle: CSSProperties = {
              position: 'absolute',
              top: `${item.top}px`,
              height: `${item.height}px`,
            }
            return (
              <div class={c('item')} style={itemStyle} key={item.key} onClick={() => this.handleItemClick(item.item)}>
                { slots.item ? slots.item({ item: item.item }) : item.item }
              </div>
            )
          })}
        </div>
      </div>
    )
  },
})
