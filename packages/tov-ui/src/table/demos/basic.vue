<docs>
---
title: 表格组件
---

基础用法
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '日期',
    key: 'date',
  },
  {
    title: '地址',
    key: 'address',
  },
])

const data = ref(Array.from({ length: 10 }).map((_, index) => {
  return {
    name: `张三${index + 1}`,
    date: `2022-01-0${index}`,
    address: `上海市普陀区金沙江路 ${index} 弄`,

  }
}))
</script>

<template>
  <div>
    <TovTable :columns="columns" :data="data">
      <TovTable :data="data" />
    </tovtable>
  </div>
</template>
