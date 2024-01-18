import type { IndicatorProps } from '@zag-js/carousel'

import type { Assign } from '../types'
import { useCarouselContext } from './carousel-context'
import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'

export type CarouselIndicatorProps = Assign<
  JSX.IntrinsicElements['button'],
  Observify<IndicatorProps>
>

export const CarouselIndicator = ({
  index,
  readOnly,
  // ----
  ...props
}: CarouselIndicatorProps) => {
  const api = useCarouselContext()
  const mergedProps = mergeProps(props, () =>
    api().getIndicatorProps({
      index: $$(index),
      readOnly: $$(readOnly),
    }),
  )

  return <button {...mergedProps} />
}
