import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselItemGroupProps = JSX.IntrinsicElements['div']

export const CarouselItemGroup: JSX.Component<CarouselItemGroupProps> = (
	props,
) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().itemGroupProps)

	return <div {...mergedProps} />
}
