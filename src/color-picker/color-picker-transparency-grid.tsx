import type { TransparencyGridProps } from '@zag-js/color-picker'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerTransparencyGridProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<TransparencyGridProps>
>

export const ColorPickerTransparencyGrid: JSX.Component<ColorPickerTransparencyGridProps> = ({
	size,
	// ----
	...props
}) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () =>
		api().getTransparencyGridProps({ size: $$(size) }),
	)

	return <div {...mergedProps} />
}
