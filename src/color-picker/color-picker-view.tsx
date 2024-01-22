import { colorPickerAnatomy } from '@ark-ui/anatomy'
import type { ColorFormat } from '@zag-js/color-picker'

import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { useColorPickerContext } from './color-picker-context'

export interface ColorPickerViewProps {
	format: ColorFormat
	children?: JSX.Element
}

export const ColorPickerView: JSX.Component<ColorPickerViewProps> = (props) => {
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
