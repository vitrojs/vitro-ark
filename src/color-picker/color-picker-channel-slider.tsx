import type { ChannelProps } from '@zag-js/color-picker'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { ColorPickerChannelSliderProvider } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelSliderProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ChannelProps>
>

export const ColorPickerChannelSlider: JSX.Component<
	ColorPickerChannelSliderProps
> = ({
	channel,
	orientation,
	// ----
	...props
}) => {
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
