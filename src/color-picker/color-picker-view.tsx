import { colorPickerAnatomy } from '@ark-ui/anatomy'
import type { ColorFormat } from '@zag-js/color-picker'

import { useColorPickerContext } from './color-picker-context'
import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'

export interface ColorPickerViewProps {
	format: ColorFormat
	children?: JSX.Element
}

export const ColorPickerView = (props: ColorPickerViewProps) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(
		props,
		() => colorPickerAnatomy.build().view.attrs,
	)

	// TODO @segunadebayo
	return (
		<If when={() => api().format === props.format}>
			<div data-format={props.format} {...mergedProps} />
		</If>
	)
}
