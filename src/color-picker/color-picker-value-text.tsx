import { colorPickerAnatomy } from '@ark-ui/anatomy'
import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerValueTextProps = JSX.IntrinsicElements['span'] &
	Observify<{
		placeholder?: string
	}>

export const ColorPickerValueText = ({
	children,
	...props
}: ColorPickerValueTextProps) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(
		props,
		() => colorPickerAnatomy.build().valueText.attrs,
	)

	return (
		<span {...mergedProps} {...colorPickerAnatomy.build().valueText.attrs}>
			{() => api().valueAsString || children}
		</span>
	)
}
