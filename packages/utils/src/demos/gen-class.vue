<script setup  lang="ts">
import { ref } from 'vue'
import { useClassNames } from '../gen-class'

const { c, cx, ce, cm } = useClassNames('gen-class')
const str = 'Modifier'
const testRef = ref(false)
function handleClick() {
  testRef.value = !testRef.value
}
cx(() => (
  {
    c: true,
    d: testRef.value,
  }
))
</script>

<template>
  <div :class="c('a', 'v', 'c', 'x')">
    {{ c("Block", ce("Element"), cm(str)) }}
  </div>
  <button @click="handleClick">
    click
  </button>
</template>
