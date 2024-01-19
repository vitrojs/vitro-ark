import { mergeProps } from '@vitro/zag'
import { useColorPickerChannelSliderContext } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelSliderThumbProps = JSX.IntrinsicElements['div']

export const ColorPickerChannelSliderThumb = (
	props: ColorPickerChannelSliderThumbProps,
) => {
	const sliderContext = useColorPickerChannelSliderContext()
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getChannelSliderThumbProps(sliderContext()),
	)

	return <div {...mergedProps} />
}
