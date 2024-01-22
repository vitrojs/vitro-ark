import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselPrevTriggerProps = JSX.IntrinsicElements['button']

export const CarouselPrevTrigger: JSX.Component<CarouselPrevTriggerProps> = (
	props,
) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().prevTriggerProps)

	return <button {...mergedProps} />
}
