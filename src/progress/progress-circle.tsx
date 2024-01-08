import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressCircleProps = JSX.IntrinsicElements['svg']

export const ProgressCircle = (props: ProgressCircleProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () => api().circleProps)

  return <svg {...mergedProps} />
}
