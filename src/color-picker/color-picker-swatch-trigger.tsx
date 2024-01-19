import type { SwatchTriggerProps } from '@zag-js/color-picker'

import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import { mergeProps } from '@vitro/zag'

export type ColorPickerSwatchTriggerProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<SwatchTriggerProps>
>

export const ColorPickerSwatchTrigger = ({
	value,
	disabled,
	// ----
	...props
}: ColorPickerSwatchTriggerProps) => {
	const triggerProps = () => ({
		value: $$(value),
		disabled: $$(disabled),
	})
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getSwatchTriggerProps(triggerProps()),
	)

	return <button {...mergedProps} />
}
