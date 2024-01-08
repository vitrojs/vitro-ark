import { mergeProps } from '../utils'
import { useCarouselContext } from './carousel-context'

export type CarouselViewportProps = JSX.IntrinsicElements['div']

export const CarouselViewport = (props: CarouselViewportProps) => {
  const api = useCarouselContext()
  const mergedProps = mergeProps(props, () => api().viewportProps)

  return <div {...mergedProps} />
}
