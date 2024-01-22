import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderMarkerGroupProps = JSX.IntrinsicElements['div']

export const SliderMarkerGroup: JSX.Component<SliderMarkerGroupProps> = (
	props,
) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () => api().markerGroupProps)

	return <div {...mergedProps} />
}
