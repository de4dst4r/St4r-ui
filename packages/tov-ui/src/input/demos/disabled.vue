<docs>
---
title: 禁用状态
---
`input`组件的禁用状态案例
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    输入信息:{{ value }}
    <TovInput v-model="value" disabled />
    <!-- <TovInput v-model="value" /> -->
    <!-- <TovInput /> -->
  </div>
</template>
