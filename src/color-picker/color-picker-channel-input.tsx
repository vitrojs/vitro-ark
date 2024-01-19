import type { ChannelInputProps } from '@zag-js/color-picker'

import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'
import { $$ } from 'vitro'
import { mergeProps } from '@vitro/zag'

export type ColorPickerChannelInputProps = Assign<
	ChannelInputProps,
	JSX.IntrinsicElements['input']
>

export const ColorPickerChannelInput = ({
	channel,
	orientation,
	// ----
	...props
}: ColorPickerChannelInputProps) => {
	const channelProps = () => ({
		channel: $$(channel),
		orientation: $$(orientation),
	})
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getChannelInputProps(channelProps()),
	)

	return <input {...mergedProps} />
}
