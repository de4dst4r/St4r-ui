import type { App } from 'vue'
import TovTable from './TovTable'
import { TableColumn } from './table-column';

(TovTable as any).install = (app: App) => {
  app.component('TovTable', TovTable)
  app.component('TovTableColumn', TableColumn)
}

export default TovTable
