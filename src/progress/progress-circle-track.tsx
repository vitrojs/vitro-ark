import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressCircleTrackProps = JSX.IntrinsicElements['circle']

export const ProgressCircleTrack = (props: ProgressCircleTrackProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () => api().circleTrackProps)

  return <circle {...mergedProps} />
}
