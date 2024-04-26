# 分析功能点

1. 接收用户输入的内容
2. 受控组件
3. 支持占位提示符
4. 基本样式的完善
5. 输入框大小
6. 输入框的禁用

v-model
属性：`modelValue`
事件：`@update:modelValue`



由于使用了`Vue3`中 `defineExpose` 、`defineProp`、`defineEmit`等仅<script setup>中可用的编译宏命令，故`Vue`版本应该不低于3.3



1.`defineProps`： 定义了组件的属性，这些属性在Interface文件中进行了定义，

2.`defineEmits`:	定义了一个事件`update:modelValue`的事件，来更新输入的值

3.`defineSlot`：	定义了名为`prefix`和`suffix`的插槽，用于渲染输入框前缀和后缀的内容



#### `defineExpose`

简述：子传父，显式指定组件中要暴露出去的属性

`defineExpose`定义：用于组件通信中父级组件调用操作子组建方法和响应式属性参数能力，即子组件将值和方法传给父组件。