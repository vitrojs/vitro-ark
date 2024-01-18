import type { ThumbProps } from '@zag-js/slider'

import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderThumbProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ThumbProps>
>

export const SliderThumb = ({ index, ...props }: SliderThumbProps) => {
  const api = useSliderContext()
  const mergedProps = mergeProps(props, () =>
    api().getThumbProps({ index: $$(index) }),
  )

  return <div {...mergedProps} />
}
