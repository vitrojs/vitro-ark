import { mergeProps } from '@vitro/zag'
import { useColorPickerChannelSliderContext } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelSliderTrackProps = JSX.IntrinsicElements['div']

export const ColorPickerChannelSliderTrack: JSX.Component<
	ColorPickerChannelSliderTrackProps
> = (props) => {
	const sliderContext = useColorPickerChannelSliderContext()
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getChannelSliderTrackProps(sliderContext()),
	)

	return <div {...mergedProps} />
}
