import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderMarkerGroupProps = JSX.IntrinsicElements['div']

export const SliderMarkerGroup = (props: SliderMarkerGroupProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () => api().markerGroupProps)

  return <div {...mergedProps} />
}
