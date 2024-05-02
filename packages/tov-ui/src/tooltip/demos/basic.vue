import TovTooltip from '../TovTooltip';
<docs>
---
title: Tooltip基础组件
---
这是一个基础的`tootip`组件
</docs>

<template>
  <div>
    <TovTooltip placement="top" content="test" trigger="click">
      <span>test</span>
      <!--       <template #content>
        <span>
          插槽
        </span>
      </template> -->
    </TovTooltip>
  </div>
</template>
