export interface ColumnType {
  title: string
  key: string
}

export interface HeaderProps {
  columns?: ColumnType[]
}

export interface BodyProps {
  columns?: ColumnType[]
  data?: any[]
}

export interface TableProps {
  columns?: ColumnType[]
  data?: any[]
}
