import { mergeProps } from '../utils'
import { useSliderContext } from './slider-context'

export type SliderTrackProps = JSX.IntrinsicElements['div']

export const SliderTrack = (props: SliderTrackProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () => api().trackProps)

  return <div {...mergedProps} />
}
