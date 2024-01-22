import type { AreaProps } from '@zag-js/color-picker'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { ColorPickerAreaProvider } from './color-picker-area-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerAreaProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<AreaProps>
>

export const ColorPickerArea: JSX.Component<ColorPickerAreaProps> = ({
	challenge,
	yChannel,
	// ----
	...props
}) => {
	const channelProps = () => ({
		challenge: $$(challenge),
		yChannel: $$(yChannel),
	})

	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getAreaProps(channelProps()),
	)

	return (
		<ColorPickerAreaProvider value={channelProps}>
			<div {...mergedProps} />
		</ColorPickerAreaProvider>
	)
}
