import { defineComponent } from 'vue'
import { useClassnames } from '@tov-ui/utils'
import type { BodyProps } from './interface'

export const Body = defineComponent<BodyProps>({
  name: 'Body',
  setup(props = { columns: [], data: [] }) {
    const { c } = useClassnames('table')
    return () => {
      const { columns, data } = props
      const bodyCls = {
        [c('cell')]: true,
        [c('body-cell')]: true,
      }
      const renderCeil = (item: any) => {
        return columns?.map((value) => {
          return <td class={bodyCls}>{item[value.key]}</td>
        })
      }
      const trCls = {
        [c('body-row')]: true,
      }
      const thCls = {
        [c('body-tb')]: true,
      }
      const renderBody = () => {
        return data?.map((value) => {
          return <tr class={trCls}>{renderCeil(value)}</tr>
        })
      }

      return (
        <tbody class={thCls}>
          {renderBody()}
        </tbody>
      )
    }
  },
})
