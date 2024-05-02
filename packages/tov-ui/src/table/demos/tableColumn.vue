<docs>
---
title: table-column
---

利用tablecolumns的方式传值,可以使得表格里面的内容更加灵活
</docs>

<script setup lang="ts">
import { ref } from 'vue'

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
    <TovTable :data="data">
      <TovTableColumn key="name" title="姓名" />
      <TovTableColumn key="date" title="日期" />
      <TovTableColumn key="address" title="地址" />
    </TovTable>
  </div>
</template>
