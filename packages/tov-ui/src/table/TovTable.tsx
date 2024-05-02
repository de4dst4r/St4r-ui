import { defineComponent, isVNode } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassnames } from '@tov-ui/utils'
import type { TableProps } from './interface'
import { Header } from './header'
import { Body } from './body'

export default defineComponent((props: TableProps, { slots }) => {
  const { c } = useClassnames('Table')
  return () => {
    // 解构赋值便于下面进行传值
    const { columns, data } = props
    const myColumns: any[] = columns ?? []
    if (myColumns.length < 1) {
      // 清空数据
      myColumns.length = 0
      const children = filterEmpty(slots.default?.() || [])
      children.forEach((child) => {
        if (isBaseType(child) || !isVNode(child))
          return
        if (child.type && (child as any).type.displayName && (child as any).type.displayName === 'TovTableColumn')
          myColumns.push(child.props)
      })
    }
    const cls = {
      [c()]: true,
    }
    return (
      <table class={cls}>
        <Header columns={myColumns} v-slots={slots} />
        <Body columns={myColumns} data={data} v-slots={slots} />
      </table>
    )
  }
}, {
  name: 'TovTable',
})
