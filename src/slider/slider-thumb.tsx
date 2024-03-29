import type { ThumbProps } from '@zag-js/slider'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSliderContext } from './slider-context'

export type SliderThumbProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ThumbProps>
>

export const SliderThumb: JSX.Component<SliderThumbProps> = ({
	index,
	...props
}) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () =>
		api().getThumbProps({ index: $$(index) }),
	)

	return <div {...mergedProps} />
}
