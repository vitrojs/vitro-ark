import { mergeProps } from '../utils'
import { useSliderContext } from './slider-context'

export type SliderRangeProps = JSX.IntrinsicElements['div']

export const SliderRange = (props: SliderRangeProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () => api().rangeProps)

  return <div {...mergedProps} />
}
