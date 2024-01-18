import type { MarkerProps } from '@zag-js/slider'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderMarkerProps = Assign<
  JSX.IntrinsicElements['span'],
  Observify<MarkerProps>
>

export const SliderMarker = ({ value, ...props }: SliderMarkerProps) => {
  const api = useSliderContext()

  const mergedProps = mergeProps(props, () =>
    api().getMarkerProps({ value: $$(value) }),
  )

  return <span {...mergedProps} />
}
