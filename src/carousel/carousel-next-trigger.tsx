import { mergeProps } from '../utils'
import { useCarouselContext } from './carousel-context'

export type CarouselNextTriggerProps = JSX.IntrinsicElements['button']

export const CarouselNextTrigger = (props: CarouselNextTriggerProps) => {
  const api = useCarouselContext()
  const mergedProps = mergeProps(props, () => api().nextTriggerProps)

  return <button {...mergedProps} />
}
