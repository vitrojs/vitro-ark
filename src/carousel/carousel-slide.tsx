import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { ItemProps } from '@zag-js/carousel'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useCarouselContext } from './carousel-context'

export type CarouselItemProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemProps>
>

export const CarouselItem: JSX.Component<CarouselItemProps> = ({
	index,
	...props
}) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemProps({
			index: $$(index),
		}),
	)

	return <div {...mergedProps} />
}
