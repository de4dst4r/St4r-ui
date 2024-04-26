<docs>
---
title: 禁用状态
---

设置'disabled'属性为true来禁用按钮。
</docs>

<script setup lang="ts">
function
handleClick() {
  console.log('按钮被点击了')
}
</script>

<template>
  <TovButton disabled @click="handleClick">
    Button1
  </TovButton>
  <TovButton disabled type="dashed" @click="handleClick">
    Button2
  </TovButton>
  <TovButton disabled type="primary" @click="handleClick">
    Button3
  </TovButton>
</template>
