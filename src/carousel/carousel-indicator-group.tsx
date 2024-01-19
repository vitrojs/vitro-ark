import { mergeProps } from '@vitro/zag'
import { useCarouselContext } from './carousel-context'

export type CarouselIndicatorGroupProps = JSX.IntrinsicElements['div']

export const CarouselIndicatorGroup = (props: CarouselIndicatorGroupProps) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () => api().indicatorGroupProps)

	return <div {...mergedProps} />
}
