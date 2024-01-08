import { mergeProps } from '../utils'
import { useSliderContext } from './slider-context'

export type SliderControlProps = JSX.IntrinsicElements['div']

export const SliderControl = (props: SliderControlProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  return <div {...mergedProps} />
}
