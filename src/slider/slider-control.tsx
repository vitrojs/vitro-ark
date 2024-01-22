import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderControlProps = JSX.IntrinsicElements['div']

export const SliderControl: JSX.Component<SliderControlProps> = (props) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
