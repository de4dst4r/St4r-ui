<docs>
---
title: 虚拟滚动列表
---
</docs>

<script setup lang="ts">
const data = Array.from({ length: 1000 }).map((_, index) => {
  return {
    id: index + 1,
    name: `test` + `_${index + 1}`,
  }
})
function handleClick(item: any) {
  console.log(item)
}
</script>

<template>
  <!--   <t-virtual-list :size="50" :remain="10">
    <div v-for="i in 100" :key="i" class="item">
      {{ i }}
    </div>
  </t-virtual-list> -->
  <div>
    <TovVirtuallist :data="data" @click-item="handleClick">
      <template #item="{ item }">
        <div class="data-item">
          {{ item.name }}
        </div>
      </template>
    </TovVirtuallist>
  </div>
</template>

<style scoped lang="less">
.data-item {
  height: 100%;
  display:flex;
  align-items: center;;

}
</style>
