import type { ItemProps } from '@zag-js/carousel'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselItemProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemProps>
>

export const CarouselItem = ({ index, ...props }: CarouselItemProps) => {
  const api = useCarouselContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemProps({
      index: $$(index),
    }),
  )

  return <div {...mergedProps} />
}
