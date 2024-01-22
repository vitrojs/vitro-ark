import { mergeProps } from '@vitro/zag'
import { useSliderContext } from './slider-context'

export type SliderTrackProps = JSX.IntrinsicElements['div']

export const SliderTrack: JSX.Component<SliderTrackProps> = (props) => {
	const api = useSliderContext()
	const mergedProps = mergeProps(props, () => api().trackProps)

	return <div {...mergedProps} />
}
