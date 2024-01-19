import type { ChannelProps } from '@zag-js/color-picker'

import type { Assign } from '../types'
import { ColorPickerChannelSliderProvider } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'
import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'

export type ColorPickerChannelSliderProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ChannelProps>
>

export const ColorPickerChannelSlider = ({
	channel,
	orientation,
	// ----
	...props
}: ColorPickerChannelSliderProps) => {
	const api = useColorPickerContext()
	const channelProps = () => ({
		channel: $$(channel),
		orientation: $$(orientation),
	})
	const mergedProps = mergeProps(props, () =>
		api().getChannelSliderProps(channelProps()),
	)

	return (
		<ColorPickerChannelSliderProvider value={channelProps}>
			<div {...mergedProps} />
		</ColorPickerChannelSliderProvider>
	)
}
