import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressCircleTrackProps = JSX.IntrinsicElements['circle']

export const ProgressCircleTrack = (props: ProgressCircleTrackProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () => api().circleTrackProps)

  return <circle {...mergedProps} />
}
