import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselNextTriggerProps = JSX.IntrinsicElements['button']

export const CarouselNextTrigger: JSX.Component<CarouselNextTriggerProps> = (
	props,
) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().nextTriggerProps)

	return <button {...mergedProps} />
}
