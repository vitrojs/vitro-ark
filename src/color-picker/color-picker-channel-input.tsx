import type { ChannelInputProps } from '@zag-js/color-picker'

import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelInputProps = Assign<
	ChannelInputProps,
	JSX.IntrinsicElements['input']
>

export const ColorPickerChannelInput: JSX.Component<
	ColorPickerChannelInputProps
> = ({
	channel,
	orientation,
	// ----
	...props
}) => {
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
