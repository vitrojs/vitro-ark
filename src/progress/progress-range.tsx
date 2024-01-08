import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressRangeProps = JSX.IntrinsicElements['div']

export const ProgressRange = (props: ProgressRangeProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () => api().rangeProps)

  return <div {...mergedProps} />
}
