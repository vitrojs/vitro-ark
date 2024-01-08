import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { applyChildren, mergeProps } from '../utils'
import { CarouselProvider } from './carousel-context'
import {
  useCarousel,
  type UseCarouselProps,
  type UseCarouselReturn,
} from './use-carousel'

export type CarouselProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseCarouselProps> & {
    children?: JSX.Element | ((api: UseCarouselReturn) => JSX.Element)
  }
>

export const Carousel = ({
  align,
  dir,
  getRootNode,
  id,
  ids,
  index,
  loop,
  onIndexChange,
  orientation,
  slidesPerView,
  spacing,

  // ----
  children,
  ...props
}: CarouselProps) => {
  const api = useCarousel({
    align,
    dir,
    getRootNode,
    id,
    ids,
    index,
    loop,
    onIndexChange,
    orientation,
    slidesPerView,
    spacing,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <CarouselProvider value={api}>
      <div {...mergedProps}>{applyChildren(children, api)}</div>
    </CarouselProvider>
  )
}
