import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselViewportProps = JSX.IntrinsicElements['div']

export const CarouselViewport: JSX.Component<CarouselViewportProps> = (
	props,
) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().viewportProps)

	return <div {...mergedProps} />
}
