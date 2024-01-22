import type { IndicatorProps } from '@zag-js/carousel'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useCarouselContext } from './carousel-context'

export type CarouselIndicatorProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<IndicatorProps>
>

export const CarouselIndicator: JSX.Component<CarouselIndicatorProps> = ({
	index,
	readOnly,
	// ----
	...props
}) => {
	const api = useCarouselContext()
	const mergedProps = mergeProps(props, () =>
		api().getIndicatorProps({
			index: $$(index),
			readOnly: $$(readOnly),
		}),
	)

	return <button {...mergedProps} />
}
