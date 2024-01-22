import type { SwatchTriggerProps } from '@zag-js/color-picker'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerSwatchTriggerProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<SwatchTriggerProps>
>

export const ColorPickerSwatchTrigger: JSX.Component<
	ColorPickerSwatchTriggerProps
> = ({
	value,
	disabled,
	// ----
	...props
}) => {
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
