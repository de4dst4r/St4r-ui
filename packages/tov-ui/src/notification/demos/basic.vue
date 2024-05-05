<docs>
---
title: 通知基本使用
---
这是一个`notification`组件的使用Demo
</docs>

<script setup lang="ts">
import { getCurrentInstance, h } from 'vue'
import { TovNotification } from 'tov-ui'
import Test from '../comp/test.vue'

const instance = getCurrentInstance()
function info() {
  TovNotification.info({
    title: '通知',
    content: h(Test),
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <div>
    <TovButton @click="info">
      通知
    </TovButton>
  </div>
</template>
