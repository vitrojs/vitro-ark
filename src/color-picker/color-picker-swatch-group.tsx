import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerSwatchGroupProps = JSX.IntrinsicElements['div']

export const ColorPickerSwatchGroup = (props: ColorPickerSwatchGroupProps) => {
	const api = useColorPickerContext()
	const mergedProps = mergeProps(props, () => api().swatchGroupProps)

	return <div {...mergedProps} />
}
