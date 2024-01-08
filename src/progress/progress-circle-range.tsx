import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressCircleRangeProps = JSX.IntrinsicElements['circle']

export const ProgressCircleRange = (props: ProgressCircleRangeProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(() => api().circleRangeProps, props)

  return <circle {...mergedProps} />
}
