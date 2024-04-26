<docs>
---
title: 输入框聚焦
---

使用`ref`获取到`input`的`dom`元素，然后调用`focus`方法调用
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const inputRef = ref()
const value = ref('')

console.log(inputRef)
onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div>
    <TovInput ref="inputRef" v-model="value" />
  </div>
</template>
