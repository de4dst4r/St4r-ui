<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@st4r-ui/utils'
import { omit, pick } from 'lodash-es'
import type { InputProps } from './interface'
import { originInputProps } from './interface'

defineOptions({
  name: 'TovInput',
  inheritAttrs: false,
})
const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
defineSlots<{
  prefix(): any
  suffix(): any
}>()
const { c, cx, cm, ce } = useClassnames('TovInput')
const input = ref<HTMLInputElement>()

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size!))]: !!props.size,
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,

  }
})

console.log(inputCls)

console.log(input.value)
function setInputValue() {
  const _input = input.value
  const modelValue = props.modelValue ?? ''
  // 如果input不存在或者数据是相等的，那么我么就不需要做赋值的处理
  if (!_input || _input.value === modelValue)
    return
  // 如果值不相同，那么我们就直接进行赋值的操作
  _input.value = modelValue
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

onMounted(() => {
  setInputValue()
})

function focus() {
  input.value?.focus()
}
function blur() {
  input.value?.blur()
}
console.log(blur())
defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="input" v-bind="pick($attrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.prefix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>
