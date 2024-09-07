export interface ProgressProps {
  type?: 'circle' | 'line' | 'dashboard' // 进度条的类型
  percentage?: number // 进度条数据
  color?: string // 进度条的颜色
  strokeWidth?: number // 进度条的宽度
  showText?: boolean // 是否显示文本
  status?: 'success' | 'fail' | 'normal' // 进度条的状态
  animation?: boolean // 是否启用动画效果
}
