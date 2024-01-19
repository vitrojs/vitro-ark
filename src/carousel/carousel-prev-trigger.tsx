import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselPrevTriggerProps = JSX.IntrinsicElements['button']

export const CarouselPrevTrigger = (props: CarouselPrevTriggerProps) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().prevTriggerProps)

	return <button {...mergedProps} />
}
