import { mergeProps } from '../utils'
import { useProgressContext } from './progress-context'

export type ProgressTrackProps = JSX.IntrinsicElements['div']

export const ProgressTrack = (props: ProgressTrackProps) => {
  const api = useProgressContext()
  const mergedProps = mergeProps(props, () => api().trackProps)

  return <div {...mergedProps} />
}
