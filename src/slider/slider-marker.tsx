import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { MarkerProps } from '@zag-js/slider'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSliderContext } from './slider-context'

export type SliderMarkerProps = Assign<
	JSX.IntrinsicElements['span'],
	Observify<MarkerProps>
>

export const SliderMarker: JSX.Component<SliderMarkerProps> = ({
	value,
	...props
}) => {
	const api = useSliderContext()

	const mergedProps = mergeProps(props, () =>
		api().getMarkerProps({ value: $$(value) }),
	)

	return <span {...mergedProps} />
}
