<docs>
---
title: 按钮大小
---
三种样式： default、small、large对应 默认、小、大
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
  <TovButton type="default" @click="handleClick">
    Button1
  </TovButton>
  <TovButton size="small" @click="handleClick">
    Button2
  </TovButton>
  <TovButton size="large" @click="handleClick">
    Button3
  </TovButton>
</template>
