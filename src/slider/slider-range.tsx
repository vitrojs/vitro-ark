import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderRangeProps = JSX.IntrinsicElements['div']

export const SliderRange: JSX.Component<SliderRangeProps> = (props) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () => api().rangeProps)

	return <div {...mergedProps} />
}
