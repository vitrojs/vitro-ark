import { mergeProps } from '../utils'
import { useSliderContext } from './slider-context'

export type SliderLabelProps = JSX.IntrinsicElements['label']

export const SliderLabel = (props: SliderLabelProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
