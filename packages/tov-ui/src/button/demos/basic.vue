<docs>
---
title: 按钮组件
---
  按钮组件，用于触发操作。
</docs>

<script lang="ts">
import TovButton from '../TovButton.vue'
import '../style/index.less'

export default {
  components: {
    TovButton,
  },
  methods: {
    handleClick() {
      console.log('按钮被点击了')
    },
  },
}
</script>

<template>
  <TovButton @click="handleClick">
    Button1
  </TovButton>
  <TovButton type="dashed" @click="handleClick">
    Button2
  </TovButton>
  <TovButton type="primary" @click="handleClick">
    Button3
  </TovButton>
</template>
