import type { SwatchProps } from '@zag-js/color-picker'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'
import { ColorPickerSwatchProvider } from './color-picker-swatch-context'

export type ColorPickerSwatchProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<SwatchProps>
>

export const ColorPickerSwatch: JSX.Component<ColorPickerSwatchProps> = ({
	respectAlpha,
	value,

	// ----
	...props
}) => {
	const api = useColorPickerContext()
	const swatchProps = () => ({
		respectAlpha: $$(respectAlpha),
		value: $$(value),
	})
	const mergedProps = mergeProps(props, () =>
		api().getSwatchProps(swatchProps()),
	)

	return (
		<ColorPickerSwatchProvider value={swatchProps}>
			<div {...mergedProps} />
		</ColorPickerSwatchProvider>
	)
}
