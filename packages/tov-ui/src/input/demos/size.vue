<docs>
---
title: 输入框组件
---
这是一个`input`组件的使用Demo

##### 以及slot 前后插槽的使用
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    value:{{ value }}
    <TovInput v-model="value" />
    <TovInput v-model="value" size="large" />
    <TovInput v-model="value" size="small" />
  </div>
</template>
