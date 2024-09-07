<docs>
---
title: 进度条组件
---
进度条组件组件，用于展示任务进度。
</docs>

<script setup lang="ts">
</script>

<template>
  <StarProgress :percentage="50" />
  <br>
  <StarProgress type="line" :percentage="90" :stroke-width="20" />
  <br>
  <StarProgress type="circle" :percentage="75" />
  <br>
  <StarProgress type="circle" :percentage="25" />
  <br>
</template>
