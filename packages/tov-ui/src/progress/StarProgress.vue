<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useClassnames } from '@st4r-ui/utils'
import type { ProgressProps } from './interface'

export default defineComponent({
  name: 'StarProgress',
  inheritAttrs: false,
  props: {
    type: {
      type: String as () => 'circle' | 'line' | 'dashboard',
      default: 'line',
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (value: number) => {
        return value >= 0 && value <= 100
      },
    },
    color: {
      type: String,
      default: '#722ed1', // 默认颜色
    },
    strokeWidth: {
      type: Number,
      default: 10, // 默认宽度
    },
    showText: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String as () => 'success' | 'fail' | 'normal',
      default: 'normal',
    },
    animation: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: ProgressProps) {
    const { c } = useClassnames('progress', 'star')

    const progressClass = c()
    const circleContainerClass = c('circle') // 创建圆形进度条的容器类名
    const circleBarClass = c('circle-bar') // 创建圆形进度条的条类名
    const circleTextClass = c('circle-text') // 创建圆形进度条的文本类名
    const barClass = c('bar')
    const progressTextClass = c('text')

    // 线型进度条
    const barTextSize = computed(() => {
      return `${props.strokeWidth! * 0.8}px`
    })
    const barStyle = computed(() => {
      return {
        width: `${props.percentage}%`,
        height: `${props.strokeWidth}px`,
        backgroundColor: props.color,
      }
    })
    // 圆形进度条
    const radius = computed(() => 50 - props.strokeWidth! / 2)
    const center = computed(() => 50)
    const circumference = computed(() => 2 * Math.PI * radius.value)
    const svgSize = computed(() => `${100 + props.strokeWidth! * 2}px`)
    const viewBox = computed(() => '0 0 100 100')
    const circleBarStyle = computed(() => {
      return {
        strokeDasharray: circumference.value,
        strokeDashoffset: circumference.value - (circumference.value * props.percentage!) / 100,
      }
    })

    return {
      progressClass,
      circleContainerClass,
      circleBarClass,
      circleTextClass,
      barClass,
      progressTextClass,
      barStyle,
      barTextSize,
      // 圆形进度条
      circleBarStyle,
      viewBox,
      svgSize,
      circumference,
      center,
      radius,
    }
  },
})
</script>

<template>
  <!-- 圆形进度条的容器 -->
  <template v-if="type === 'circle'">
    <div class="progress-circle" :class="{ animation }">
      <svg :viewBox="viewBox" class="progress-circle-svg" :style="{ width: svgSize, height: svgSize }">
        <circle
          class="progress-circle-bg"
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="strokeWidth"
        />
        <circle
          class="progress-circle-fg"
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke="color"
          :stroke-width="strokeWidth"
          :style="circleBarStyle"
        />
      </svg>
      <div v-if="showText" class="progress-circle-text">
        <span>{{ percentage }}%</span>
      </div>
    </div>
  </template>
  <template v-else>
    <div :class="progressClass">
      <div :class="barClass" :style="barStyle">
        <!-- 如果显示文本，则显示百分比 -->
        <span v-if="showText" :class="progressTextClass" :style="{ fontSize: barTextSize }">{{ percentage }}%</span>
      </div>
    </div>
  </template>
</template>

<style lang="less" scoped>
.progress-circle {
  position: relative;
  display: inline-block;

  &.animation .progress-circle-fg {
    transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;
  }

  .progress-circle-svg {
    transform: rotate(-90deg);
    display: block;
    margin: auto;
  }

  .progress-circle-bg,
  .progress-circle-fg {
    fill: none;
  }

  .progress-circle-bg {
    stroke: #eaeaea;
  }

  .progress-circle-fg {
    transition: stroke-dashoffset 0.6s linear;
    transform-origin: center;
  }

  .progress-circle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;  /* 动态字体大小调整 */
  }
}
</style>
