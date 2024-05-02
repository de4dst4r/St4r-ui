import { defineComponent } from 'vue'
import { useClassnames } from '@tov-ui/utils'
import type { HeaderProps } from './interface'

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    const { c } = useClassnames('table')
    return () => {
      const cellCls = {
        [c('cell')]: true,
        [c('header-cell')]: true,
      }
      const renderHeader = () => {
        return (props.columns ?? []).map((column) => {
          return <th class={cellCls}>{column.title}</th>
        })
      }

      const rowCls = {
        [c('header-row')]: true,
      }
      const thCls = {
        [c('header-th')]: true,
      }
      return (
        <thead class={thCls}>
          <tr class={rowCls}>
            {renderHeader()}
          </tr>
        </thead>
      )
    }
  },
})
