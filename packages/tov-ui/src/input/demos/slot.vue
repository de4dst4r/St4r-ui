<docs>
---
title: 输入框组件之使用插槽
---
这是一个`input`组件使用插槽Demo
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <TovInput v-model="value">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </TovInput>
  </div>
</template>
